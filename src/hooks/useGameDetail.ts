import { useQuery } from "@tanstack/react-query";
import APIClient from "@/services/api-client";
import type { Game } from "@/entities/Game";

const apiClient = new APIClient<Game>("/games");
const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGameDetail;
