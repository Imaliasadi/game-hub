import useGenres, { type Genres } from "@/hooks/useGenres";
import OptimiseImageSize from "@/services/image-url";
import { Button, Heading, HStack, Image, List, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genres) => void;
  selectedGenres: Genres | null;
}

function GameGenres({ onSelectedGenre, selectedGenres }: Props) {
  const { data, isLoading } = useGenres();
  return (
    <>
      <Heading marginBottom={3}>Genres</Heading>
      <List.Root>
        {isLoading && <Spinner />}
        {data.map((genre) => (
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
                onClick={() => onSelectedGenre(genre)}
                variant="plain"
                fontWeight={genre === selectedGenres ? "bold" : ""}
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
