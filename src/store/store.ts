import { create } from "zustand";

interface PlayerState {
    currentSongIndex: number;
    setCurrentSongIndex: (index: number) => void;
    volume: number;
    setVolume: (volume: number) => void;
    currentSongDuration: number;
    setCurrentSongDuration: (duration: number) => void;
    favorites: number[];
    addFavorite: (index: number) => void;
    removeFavorite: (index: number) => void;

    isSongListOpen: boolean;
    isFavoritesOpen: boolean;
    toggleSongListModal: () => void;
    toggleFavoritesModal: () => void;

    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
    currentTime: number;
    setCurrentTime: (currentTime: number) => void;
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
                localStorage.setItem("favorites", JSON.stringify(newFavorites));
                return { favorites: newFavorites };
            });
        },
        removeFavorite: (index) => {
            set((state) => {
                const newFavorites = state.favorites.filter((i) => i !== index);
                localStorage.setItem("favorites", JSON.stringify(newFavorites));
                return { favorites: newFavorites };
            });
        },
        isSongListOpen: false,
        isFavoritesOpen: false,
        toggleSongListModal: () =>
            set((state) => ({ isSongListOpen: !state.isSongListOpen })),
        toggleFavoritesModal: () =>
            set((state) => ({ isFavoritesOpen: !state.isFavoritesOpen })),

        isPlaying: false,
        setIsPlaying: (isPlaying) => set({ isPlaying }),
        currentTime: 0,
        setCurrentTime: (currentTime) => set({ currentTime }),
    };
});

export default usePlayerStore;
