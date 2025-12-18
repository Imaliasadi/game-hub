import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error) throw error;
  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
}

export default GameDetailPage;
