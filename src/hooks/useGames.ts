import APIclient, { type FetchRes } from "@/services/api-client";
import { useInfiniteQuery } from "@tanstack/react-query";
import ms from "ms";
import useGameQueryStore from "@/components/store";
import type { Game } from "@/entities/Game";

const apiClient = new APIclient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  return useInfiniteQuery<FetchRes<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: ms("24h"),
  });
};
export default useGames;
