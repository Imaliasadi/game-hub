import { Grid, GridItem } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import GameGenres from "./components/GameGenres";
import GamesGrid from "./components/GamesGrid";
import DynamicHeading from "./components/Heading";
import NavBar from "./components/NavBar";
import PlatformSlector from "./components/PlatformSlector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <Grid
        padding={3}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
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

export default App;
