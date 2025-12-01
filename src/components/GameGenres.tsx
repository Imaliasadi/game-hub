import useGenres from "@/hooks/useGenres";
import OptimiseImageSize from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";
import useGameQueryStore from "./store";

function GameGenres() {
  const { data, isLoading } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  return (
    <>
      <Heading marginBottom={3}>Genres</Heading>
      <List.Root>
        {isLoading && <Spinner />}
        {data?.results.map((genre) => (
          <List.Item
            key={genre.id}
            padding={"5px"}
            listStyle={"none"}
            _hover={{ transform: "translateX(8px)" }}
            transition="transform 0.2s"
          >
            <HStack>
              <Image
                boxSize={"40px"}
                borderRadius={8}
                src={OptimiseImageSize(genre.image_background)}
              />{" "}
              <Button
                onClick={() => setGenreId(genre.id)}
                variant="plain"
                fontWeight={genre.id === selectedGenreId ? "bold" : ""}
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
}

export default GameGenres;
