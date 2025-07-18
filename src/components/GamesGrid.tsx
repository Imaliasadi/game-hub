import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { GameQuery } from "../App";
import useGames from "@/hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

function GamesGrid({ gameQuery }: Props) {
  const { data, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} gap={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} gap={10}>
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />{" "}
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}

export default GamesGrid;
