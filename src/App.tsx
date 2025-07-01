import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GameGenres from "./components/GameGenres";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSlector from "./components/PlatformSlector";
import type { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
      <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={"5"}>
        <GameGenres
          onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          selectedGenres={gameQuery.genre}
        />
      </GridItem>
      <GridItem area="main">
        <PlatformSlector
          selectedPlatform={gameQuery.platform}
          onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
        />
        <GamesGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
