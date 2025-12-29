import useTrailers from "@/hooks/useTrailers";

interface Props {
  gameId: number;
}
function GameTrailer({ gameId }: Props) {
  const { data, error, isLoading } = useTrailers(gameId);
  console.log(data);
  if (isLoading) return null;
  if (error) throw error;
  const first = data?.results[0];
  return first ? <video src={first.data.max} poster={first.preview} controls /> : null;
}

export default GameTrailer;
