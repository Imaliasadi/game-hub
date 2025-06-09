import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
function CriticScore({ score }: Props) {
  const color = score > 75 ? "green" : score > 65 ? "yellow" : "red";
  return (
    <Badge colorPalette={color} borderRadius="4px" paddingX="2">
      {score}
    </Badge>
  );
}

export default CriticScore;
