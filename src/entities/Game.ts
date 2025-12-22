import type { Genres } from "./Genres";
import type { Platform } from "./Platform";
import type { Publisher } from "./Publisher";

export interface Game {
  genres: Genres[];
  publishers: Publisher[];
  id: number;
  slug: string;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  description_raw: string;
}
