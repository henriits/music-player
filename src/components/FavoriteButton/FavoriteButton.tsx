import React from "react";
import usePlayerStore from "@/store/store";

interface FavoriteButtonProps {
    index: number;
    isFavorite: boolean;
    className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    index,
    isFavorite,
}) => {
    const { addFavorite, removeFavorite } = usePlayerStore(); // Get favorite functions from Zustand store

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
            {isFavorite ? "❤️" : "🤍"}
        </button>
    );
};

export default FavoriteButton;
