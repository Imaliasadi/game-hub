import type { Game } from "@/hooks/useGames";
import { Card, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import OptimiseImageSize from "@/services/image-url";
import RatingEmojies from "./RatingEmojies";

interface Props {
  game: Game;
}

function GameCard({ game }: Props) {
  return (
    <Card.Root>
      <Card.Body>
        <Image src={OptimiseImageSize(game.background_image)} />
        <HStack justifyContent="space-between">
          <PlatformIconList platforms={game.parent_platforms.map((p) => p.platform)} />
          <CriticScore score={game.metacritic} />
        </HStack>{" "}
        <Card.Title fontSize="2xl">{game.name}</Card.Title>
        <RatingEmojies rating={game.rating_top} />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCard;
