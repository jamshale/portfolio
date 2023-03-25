import { CanceledError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Position {
  type: string;
  abbreviation: string;
}

interface PlayerResponse {
  person: DetailedPlayer;
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

interface RosterResponse<PlayerResponse> {
  roster: PlayerResponse[];
}

const useRoster = () => {
  const [playerDetails, setPlayerDetails] = useState<PlayerResponse[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<RosterResponse<PlayerResponse>>("/api/v1/teams/23/roster", {
        params: {
          expand: "roster.person, person.names",
          season: "20222023",
        },
      })
      .then((res) => {
        setPlayerDetails(res.data.roster);
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
