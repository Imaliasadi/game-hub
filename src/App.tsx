import { Analytics } from "@vercel/analytics/react";
import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";
import GameGenres from "./components/GameGenres";
import { useState } from "react";
import type { Genres } from "./hooks/useGenres";
import PlatformSlector from "./components/PlatformSlector";
import type { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import DynamicHeading from "./components/Heading";

export interface GameQuery {
  genre: Genres | null;
  platform: Platform | null;
  sort: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
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
          <NavBar onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })} />
        </GridItem>
        <GridItem area="aside" display={{ base: "none", lg: "block" }} paddingX={"5"}>
          <GameGenres
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenres={gameQuery.genre}
          />
        </GridItem>
        <GridItem area="main">
          <DynamicHeading gameQuery={gameQuery} />
          <PlatformSlector
            selectedPlatform={gameQuery.platform}
            onSelectedPlatform={(platform) => setGameQuery({ ...gameQuery, platform })}
          />
          <SortSelector
            sortOrder={gameQuery.sort}
            onSelectedSort={(sort) => setGameQuery({ ...gameQuery, sort })}
          />
          <GamesGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
      <Analytics />
    </>
  );
}

export default App;
