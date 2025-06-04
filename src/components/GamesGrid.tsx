import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}
interface FetchGamesRes {
  count: number;
  results: Game[];
}

function GamesGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GamesGrid;
