import type { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
function DynamicHeading({ gameQuery }: Props) {
  const { data: genres } = useGenres();
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find((p) => p.id === gameQuery.platformId);
  const headings = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as={"h1"} fontSize={"4xl"} marginBottom={"5"}>
      {headings}
    </Heading>
  );
}

export default DynamicHeading;
