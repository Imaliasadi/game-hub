import type { Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Card.Body>
        <Image src={game.background_image} />
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
