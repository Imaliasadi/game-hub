import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const colorScheme = score > 75 ? "green" : score > 65 ? "yellow" : "red";
  return (
    <Badge bgColor={colorScheme} borderRadius="4px" px="2">
      {score}
    </Badge>
  );
}

export default CriticScore;
