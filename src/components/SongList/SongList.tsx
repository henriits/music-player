// SongList.tsx
import React from "react";
import useFetchSongs from "../../hooks/useFetchSongs";
import usePlayerStore from "@/store/store";
import { formatDuration } from "@/utils/durationUtils";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import "./SongList.css";

const SongList: React.FC = () => {
    const { songs, loading, error } = useFetchSongs();
    const { setCurrentSongIndex, setIsPlaying, favorites } = usePlayerStore(); // Import setIsPlaying

    const handleSongClick = (index: number) => {
        setCurrentSongIndex(index);
        setIsPlaying(true); // Set isPlaying to true to start playback
    };

    return (
        <div className="all-songs">
            {loading && <p>Loading songs...</p>}
            {error && <p>Error fetching songs: {error}</p>}
            <ul>
                {songs.map((song, index) => (
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
                        <FavoriteButton
                            index={index}
                            isFavorite={favorites.includes(index)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
