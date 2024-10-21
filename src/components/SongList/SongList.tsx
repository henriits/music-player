import React from "react";
import useFetchSongs from "../../hooks/useFetchSongs"; // Import your custom hook
import usePlayerStore from "@/store/store"; // Import Zustand store
import { formatDuration } from "@/utils/durationUtils"; // Import the utility function
import "./SongList.css";

const SongList: React.FC = () => {
    const { songs, loading, error } = useFetchSongs(); // Use custom hook
    const { setCurrentSongIndex, favorites, addFavorite, removeFavorite } =
        usePlayerStore(); // Get functions to set current song index and manage favorites

    // Handle song click
    const handleSongClick = (index: number) => {
        setCurrentSongIndex(index); // Set the clicked song as the current song
    };

    // Handle favorite toggle
    const handleFavoriteToggle = (index: number) => {
        if (favorites.includes(index)) {
            removeFavorite(index); // Remove from favorites
        } else {
            addFavorite(index); // Add to favorites
        }
    };

    return (
        <div className="all-songs">
            <h3>All Songs</h3>
            {loading && <p>Loading songs...</p>}
            {error && <p>Error fetching songs: {error}</p>}
            <ul>
                {songs.map((song, index) => (
                    <li
                        key={index}
                        className="song-item"
                        onClick={() => handleSongClick(index)} // Add click handler
                    >
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
                            className="favorite-button"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent triggering the song click
                                handleFavoriteToggle(index);
                            }}
                        >
                            {favorites.includes(index) ? "❤️" : "🤍"}{" "}
                            {/* Show filled heart if favorite */}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
