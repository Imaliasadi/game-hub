import type { GameQuery } from "@/App";
import APIclient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Platform } from "./usePlatforms";

const apiClient = new APIclient<Game>("/games");
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
        },
      }),
  });
export default useGames;
