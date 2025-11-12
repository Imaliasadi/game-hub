import apiClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient
        .get<FetchRes<Platform>>("/platforms/lists/parents")
        .then((res) => res.data),
  });

export default usePlatforms;
