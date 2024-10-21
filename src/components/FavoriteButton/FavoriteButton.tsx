// src/components/FavoriteButton/FavoriteButton.tsx

import React from "react";
import usePlayerStore from "@/store/store"; // Import Zustand store

interface FavoriteButtonProps {
    index: number; // Index of the song
    isFavorite: boolean; // Whether the song is a favorite
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    index,
    isFavorite,
}) => {
    const { addFavorite, removeFavorite } = usePlayerStore(); // Get favorite functions from Zustand store

    // Handle favorite toggle
    const handleFavoriteToggle = (e: React.MouseEvent) => {
        e.stopPropagation(); // Prevent triggering the song click
        if (isFavorite) {
            removeFavorite(index); // Remove from favorites
        } else {
            addFavorite(index); // Add to favorites
        }
    };

    return (
        <button className="favorite-button" onClick={handleFavoriteToggle}>
            {isFavorite ? "❤️" : "🤍"} {/* Show filled heart if favorite */}
        </button>
    );
};

export default FavoriteButton;
