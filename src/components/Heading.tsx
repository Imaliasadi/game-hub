import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";
import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "./store";

function DynamicHeading() {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
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
