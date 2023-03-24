import { CanceledError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Person {
  id: number;
  fullName: string;
  link: string;
}

interface Position {
  type: string;
  abbreviation: string;
}

interface SimplePlayerResponse {
  person: Person;
  jerseyNumber: string;
  position: Position;
}

interface DetailedPlayer {
  id: number;
  fullName: string;
  currentAge: number;
  height: string;
  weight: number;
  rosterStatus: string;
  shootsCatches: string;
  primaryNumber: string;
  primaryPosition: Position;
}

interface RosterResponse<SimplePlayerResponse> {
  roster: SimplePlayerResponse[];
}

interface DetailedPlayerResponse<DetailedPlayer> {
  people: DetailedPlayer[];
}

const useRoster = () => {
  const [playerDetails, setPlayerDetails] = useState<DetailedPlayer[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<RosterResponse<SimplePlayerResponse>>("/api/v1/teams/23/roster")
      .then((res) => {
        const playerDetailsPromises = new Array<
          Promise<AxiosResponse<DetailedPlayerResponse<DetailedPlayer>>>
        >();
        res.data.roster.forEach((player) => {
          playerDetailsPromises.push(
            apiClient.get<DetailedPlayerResponse<DetailedPlayer>>(
              "/api/v1/people/" + player.person.id
            )
          );
        });

        Promise.all<
          Promise<AxiosResponse<DetailedPlayerResponse<DetailedPlayer>>>
        >(playerDetailsPromises).then((res) => {
          const playerDetails = new Array<DetailedPlayer>();
          res.forEach((p) => playerDetails.push(p.data.people[0]));
          setPlayerDetails(playerDetails);
        });

        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { playerDetails, error, isLoading };
};

export default useRoster;
