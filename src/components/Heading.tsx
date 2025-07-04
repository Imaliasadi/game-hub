import type { GameQuery } from "@/App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuery: GameQuery;
}
function DynamicHeading({ gameQuery }: Props) {
  const headings = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as={"h1"} fontSize={"4xl"} marginBottom={"5"}>
      {headings}
    </Heading>
  );
}

export default DynamicHeading;
