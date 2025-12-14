import GameGenres from "@/components/GameGenres";
import GamesGrid from "@/components/GamesGrid";
import DynamicHeading from "@/components/Heading";
import PlatformSlector from "@/components/PlatformSlector";
import SortSelector from "@/components/SortSelector";
import { Grid, GridItem } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";

function HomePage() {
  return (
    <>
      <Grid
        padding={3}
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
      >
        <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={"5"}>
          <GameGenres />
        </GridItem>
        <GridItem area="main">
          <DynamicHeading />
          <PlatformSlector />
          <SortSelector />
          <GamesGrid />
        </GridItem>
      </Grid>
      <Analytics />
    </>
  );
}

export default HomePage;
