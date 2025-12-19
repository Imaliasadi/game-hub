import ExpandableText from "@/components/ExpandableText";
import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

function GameDetailPage() {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGameDetail(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText child={game.description_raw} />
    </>
  );
}

export default GameDetailPage;
