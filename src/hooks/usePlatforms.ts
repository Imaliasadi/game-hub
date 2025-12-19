import APIClient, { type FetchRes } from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import type { Platform } from "../entities/Platform";

const apiCleint = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery<FetchRes<Platform>>({
    queryKey: ["platforms"],
    queryFn: apiCleint.getAll,
    staleTime: ms("24h"),
  });

export default usePlatforms;
