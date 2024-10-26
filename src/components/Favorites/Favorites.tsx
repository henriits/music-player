import "./Favorites.css";
import useFetchSongs from "@/hooks/useFetchSongs";
import usePlayerStore from "@/store/store";
import { formatDuration } from "@/utils/durationUtils";

const Favorites = () => {
    const { songs, loading, error } = useFetchSongs();
    const { favorites, setCurrentSongIndex, removeFavorite, setIsPlaying } =
        usePlayerStore(); // Import setIsPlaying

    const handleSongClick = (index: number) => {
        setCurrentSongIndex(index);
        setIsPlaying(true); // Start playback when a favorite is clicked
    };

    return (
        <div className="favorites-section">
            {loading && <p>Loading songs...</p>}
            {error && <p>Error fetching songs: {error}</p>}
            <ul>
                {favorites.length === 0 ? (
                    <li>No favorites yet.</li>
                ) : (
                    favorites.map((index) => {
                        const song = songs[index];
                        if (!song) return null;

                        return (
                            <li
                                key={index}
                                className="song-item"
                                onClick={() => handleSongClick(index)}
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
                                    className="remove-favorite-button"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFavorite(index);
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
