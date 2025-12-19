import APIClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Genres } from "../entities/Genres";

const apiClient = new APIClient<Genres>("/genres");
const useGenres = () =>
  useQuery<FetchRes<Genres>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useGenres;
