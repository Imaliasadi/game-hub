import apiClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  slug: string;
}

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchRes<Genres>>("genres").then((res) => res.data),
  });

export default useGenres;
