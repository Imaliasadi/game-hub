import type { Game } from "@/entities/Game";
import { SimpleGrid, Text } from "@chakra-ui/react";
import CriticScore from "./CriticScore";
import DefinitionAttribute from "./DefinitionAttribute";

interface Props {
  game: Game;
}
function GameAttributes({ game }: Props) {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefinitionAttribute term="Platforms">
        {game.parent_platforms.map(({ platform }) => (
          <Text>{platform.name}</Text>
        ))}
      </DefinitionAttribute>
      <DefinitionAttribute term="Meta Score">
        <CriticScore score={game.metacritic} />
      </DefinitionAttribute>
      <DefinitionAttribute term="Genres">
        {game.genres.map((genre) => (
          <Text>{genre.name}</Text>
        ))}
      </DefinitionAttribute>
      <DefinitionAttribute term="Publishers">
        {game.publishers.map((publisher) => (
          <Text>{publisher.name}</Text>
        ))}
      </DefinitionAttribute>
    </SimpleGrid>
  );
}

export default GameAttributes;
