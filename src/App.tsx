import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GameGenres from "./components/GameGenres";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GameGenres />
      </GridItem>
      <GridItem area="main">
        <GamesGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
