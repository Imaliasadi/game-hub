import useGames from "@/hooks/useGames";
import { Text } from "@chakra-ui/react";

function GamesGrid() {
  const { games, error } = useGames();
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
