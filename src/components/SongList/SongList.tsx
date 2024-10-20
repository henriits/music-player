// src/components/SongList/SongList.tsx

import React from "react";
import useFetchSongs from "../../hooks/useFetchSongs"; // Import your custom hook
import "./SongList.css";

const SongList: React.FC = () => {
    const { songs, loading, error } = useFetchSongs(); // Use custom hook

    return (
        <div className="all-songs">
            <h3>All Songs</h3>
            {loading && <p>Loading songs...</p>}
            {error && <p>Error fetching songs: {error}</p>}
            <ul>
                {songs.map((song, index) => (
                    <li key={index} className="song-item">
                        <img
                            src={song.cover}
                            alt={`${song.title} cover`}
                            className="song-cover"
                        />
                        <div className="song-info">
                            <h4>{song.title}</h4>
                            <p>{song.artist}</p>
                            <span>{song.duration}</span>
                        </div>
                        <button className="favorite-button">❤️</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongList;
