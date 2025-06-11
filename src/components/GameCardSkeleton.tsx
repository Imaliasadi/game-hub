import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
  return (
    <Card.Root borderRadius={10} overflow="hidden" width={"300px"}>
      <Skeleton height={"200px"} />
      <Card.Body>
        <SkeletonText />
      </Card.Body>
    </Card.Root>
  );
}

export default GameCardSkeleton;
