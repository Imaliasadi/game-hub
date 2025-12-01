import { Box, Button, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import useGames from "@/hooks/useGames";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


function GamesGrid() {
  const { data, error, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];

  const fetchedDataLength =
    data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;
  return (
    <Box gap={10}>
      {error && <Text>{error.message}</Text>}
      <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} gap={10}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              {" "}
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
      </SimpleGrid>
      <InfiniteScroll
        dataLength={fetchedDataLength}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      >
        <SimpleGrid columns={{ sm: 1, lg: 2, xl: 3 }} gap={10}>
          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />{" "}
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
      {hasNextPage && (
        <Button marginY={5} disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </Button>
      )}
    </Box>
  );
}

export default GamesGrid;
