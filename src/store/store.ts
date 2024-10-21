// src/store.ts
import { create } from "zustand";

interface PlayerState {
    currentSongIndex: number;
    setCurrentSongIndex: (index: number) => void;
    volume: number;
    setVolume: (volume: number) => void;
    currentSongDuration: number; // New state variable
    setCurrentSongDuration: (duration: number) => void; // New function
}

const usePlayerStore = create<PlayerState>((set) => ({
    currentSongIndex: 0,
    setCurrentSongIndex: (index) => set({ currentSongIndex: index }),
    volume: 80,
    setVolume: (volume) => set({ volume }),
    currentSongDuration: 0, // Initialize the duration to 0
    setCurrentSongDuration: (duration) =>
        set({ currentSongDuration: duration }), // Set the duration
}));

export default usePlayerStore;
