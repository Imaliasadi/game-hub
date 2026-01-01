import ExpandableText from "@/components/ExpandableText";
import GameAttributes from "@/components/GameAttributes";
import GameScreenShots from "@/components/GameScreenShots";
import GameTrailer from "@/components/GameTrailer";
import useGameDetail from "@/hooks/useGameDetail";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      <GridItem>
        <Heading>{game.name}</Heading>
        <ExpandableText child={game.description_raw} />
        <GameAttributes game={game} />
      </GridItem>
      <GridItem>
        <GameTrailer gameId={game.id} />
        <GameScreenShots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
}

export default GameDetailPage;
