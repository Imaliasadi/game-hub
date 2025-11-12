import APIClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiCleint = new APIClient<Platform>("/platforms/lists/parents");
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const usePlatforms = () =>
  useQuery<FetchRes<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiCleint.getAll,
  });

export default usePlatforms;
