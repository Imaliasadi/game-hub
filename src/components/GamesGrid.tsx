import useGames, { type Platform } from "@/hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import type { Genres } from "@/hooks/useGenres";

interface Props {
  selectedGenre: Genres | null;
  selectedPlatform: Platform | null;
}

function GamesGrid({ selectedGenre, selectedPlatform }: Props) {
  const { data, error, isLoading } = useGames(selectedGenre, selectedPlatform);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} gap={10}>
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
