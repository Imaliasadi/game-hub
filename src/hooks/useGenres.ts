import APIClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

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
  });

export default useGenres;
