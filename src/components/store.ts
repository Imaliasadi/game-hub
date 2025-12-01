import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (search: string) => void;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSort: (sort: string) => void;
}
const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSort: (sort) => set((store) => ({ gameQuery: { ...store.gameQuery, sort } })),
}));

export default useGameQueryStore;
