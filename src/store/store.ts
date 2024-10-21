import { create } from "zustand";

interface PlayerState {
    currentSongIndex: number;
    setCurrentSongIndex: (index: number) => void;
    volume: number;
    setVolume: (volume: number) => void;
    currentSongDuration: number;
    setCurrentSongDuration: (duration: number) => void;
    favorites: number[]; // Array of song indexes that are favorites
    addFavorite: (index: number) => void; // Add favorite
    removeFavorite: (index: number) => void; // Remove favorite
}

const usePlayerStore = create<PlayerState>((set) => ({
    currentSongIndex: 0,
    setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
    volume: 50,
    setVolume: (volume) => set({ volume }),
    currentSongDuration: 0,
    setCurrentSongDuration: (duration) =>
        set({ currentSongDuration: duration }),
    favorites: [],
    addFavorite: (index) =>
        set((state) => ({
            favorites: [...state.favorites, index],
        })),
    removeFavorite: (index) =>
        set((state) => ({
            favorites: state.favorites.filter((i) => i !== index),
        })),
}));

export default usePlayerStore;
