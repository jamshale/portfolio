import { CanceledError } from "axios";
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

interface RosterResponse<SimplePlayerResponse> {
  roster: SimplePlayerResponse[];
}

const useRoster = () => {
  const [data, setData] = useState<SimplePlayerResponse[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiClient
      .get<RosterResponse<SimplePlayerResponse>>("/api/v1/teams/23/roster")
      .then((res) => {
        setData(res.data.roster);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useRoster;
