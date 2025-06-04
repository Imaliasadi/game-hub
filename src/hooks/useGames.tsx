import apiClient from "@/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesRes {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controler = new AbortController();
    apiClient
      .get<FetchGamesRes>("/games", { signal: controler.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    return () => controler.abort();
  }, []);

  return { games, error };
};

export default useGames;
