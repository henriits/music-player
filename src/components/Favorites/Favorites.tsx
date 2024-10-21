import "./Favorites.css";
import useFetchSongs from "@/hooks/useFetchSongs"; // Import your custom hook
import usePlayerStore from "@/store/store"; // Import Zustand store
import { formatDuration } from "@/utils/durationUtils"; // Import the utility function

const Favorites = () => {
    const { songs, loading, error } = useFetchSongs(); // Use custom hook to get songs
    const { favorites, setCurrentSongIndex, removeFavorite } = usePlayerStore(); // Get favorites and functions from Zustand store

    // Handle song click
    const handleSongClick = (index: number) => {
        setCurrentSongIndex(index); // Set the clicked song as the current song
    };

    return (
        <div className="favorites-section">
            {loading && <p>Loading songs...</p>} {/* Loading state */}
            {error && <p>Error fetching songs: {error}</p>} {/* Error state */}
            <ul>
                {favorites.length === 0 ? (
                    <li>No favorites yet.</li>
                ) : (
                    favorites.map((index) => {
                        const song = songs[index]; // Get the song using the index
                        if (!song) return null; // Check if the song exists

                        return (
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
                                    <span>
                                        {formatDuration(song.duration)}
                                    </span>{" "}
                                    {/* Use formatDuration */}
                                </div>
                                <button
                                    className="remove-favorite-button"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevent triggering the song click
                                        removeFavorite(index); // Remove favorite
                                    }}
                                >
                                    ❌
                                </button>
                            </li>
                        );
                    })
                )}
            </ul>
        </div>
    );
};

export default Favorites;
