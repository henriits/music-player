// src/store/store.ts
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

const usePlayerStore = create<PlayerState>((set) => {
    const storedFavorites = JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

    return {
        currentSongIndex: 0,
        setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
        volume: 50,
        setVolume: (volume) => set({ volume }),
        currentSongDuration: 0,
        setCurrentSongDuration: (duration) =>
            set({ currentSongDuration: duration }),
        favorites: storedFavorites,
        addFavorite: (index) => {
            set((state) => {
                const newFavorites = [...state.favorites, index];
                localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Update localStorage
                return { favorites: newFavorites };
            });
        },
        removeFavorite: (index) => {
            set((state) => {
                const newFavorites = state.favorites.filter((i) => i !== index);
                localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Update localStorage
                return { favorites: newFavorites };
            });
        },
    };
});

export default usePlayerStore;
