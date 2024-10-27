import React from "react";
import usePlayerStore from "@/store/store";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
    index: number;
    isFavorite: boolean;
    className?: string;
}

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
    index,
    isFavorite,
}) => {
    const { addFavorite, removeFavorite } = usePlayerStore();

    const handleFavoriteToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isFavorite) {
            removeFavorite(index);
        } else {
            addFavorite(index);
        }
    };

    return (
        <button className="favorite-button" onClick={handleFavoriteToggle}>
            {isFavorite ? "❤️" : "🤍"}
        </button>
    );
};

export default FavoriteButton;
