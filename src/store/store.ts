// src/store.ts
import { create } from "zustand";

interface PlayerState {
    currentSongIndex: number;
    setCurrentSongIndex: (index: number) => void;
    volume: number;
    setVolume: (volume: number) => void; // Function to set volume
}

const usePlayerStore = create<PlayerState>((set) => ({
    currentSongIndex: 3, // Default to the first song
    setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
    volume: 40, // Default volume
    setVolume: (volume) => set({ volume }), // Set the volume
}));

export default usePlayerStore; // Export the store
