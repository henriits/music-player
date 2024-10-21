import React from "react";
import useFetchSongs from "../../hooks/useFetchSongs"; // Import your custom hook
import usePlayerStore from "@/store/store"; // Import Zustand store
import { formatDuration } from "@/utils/durationUtils"; // Import the utility function
import "./Favorites.css";

const Favorites: React.FC = () => {
    const { songs } = useFetchSongs(); // Use custom hook to fetch songs
    const { favorites, removeFavorite } = usePlayerStore(); // Get favorites and remove function from store

    return (
        <div className="favorites-section">
            <h3>Favorites</h3>
            {favorites.length === 0 ? (
                <p>No favorites yet!</p>
            ) : (
                <ul>
                    {favorites.map((index) => {
                        const song = songs[index]; // Get the song based on the index
                        return (
                            <li key={index} className="song-item">
                                <img
                                    src={song.cover}
                                    alt={`${song.title} cover`}
                                    className="song-cover"
                                />
                                <div className="song-info">
                                    <h4>{song.title}</h4>
                                    <p>{song.artist}</p>
                                    <span>{formatDuration(song.duration)}</span>
                                </div>
                                <button
                                    className="remove-favorite-button"
                                    onClick={() => removeFavorite(index)} // Remove from favorites
                                >
                                    ❌
                                </button>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
};

export default Favorites;
