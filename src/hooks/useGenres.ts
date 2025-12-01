import APIClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";

const apiClient = new APIClient<Genres>("/genres");
export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () =>
  useQuery<FetchRes<Genres>>({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
  });

export default useGenres;
