import { Grid, GridItem } from "@chakra-ui/react";
import { Analytics } from "@vercel/analytics/react";
import { useState } from "react";
import GameGenres from "./components/GameGenres";
import GamesGrid from "./components/GamesGrid";
import DynamicHeading from "./components/Heading";
import NavBar from "./components/NavBar";
import PlatformSlector from "./components/PlatformSlector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
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
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
            selectedGenreId={gameQuery.genreId}
          />
        </GridItem>
        <GridItem area="main">
          <DynamicHeading gameQuery={gameQuery} />
          <PlatformSlector
            selectedPlatformId={gameQuery.platformId}
            onSelectedPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platformId: platform.id })
            }
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
