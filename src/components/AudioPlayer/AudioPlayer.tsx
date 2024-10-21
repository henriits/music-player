// src/components/AudioPlayer/AudioPlayer.tsx

import useFetchSongs from "@/hooks/useFetchSongs";
import usePlayerStore from "@/store/store"; // Import the Zustand store
import { formatDuration } from "@/utils/durationUtils"; // Import the utility function
import FavoriteButton from "../FavoriteButton/FavoriteButton"; // Import the FavoriteButton component
import "./AudioPlayer.css";

import React, { useRef, useState, useEffect } from "react";

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    // Use Zustand store
    const {
        currentSongIndex,
        setCurrentSongIndex,
        volume,
        setVolume,
        currentSongDuration,
        setCurrentSongDuration,
        favorites,
    } = usePlayerStore();

    // Use custom hook to fetch songs
    const { songs, loading, error } = useFetchSongs();

    useEffect(() => {
        if (songs.length > 0 && audioRef.current) {
            audioRef.current.src = songs[currentSongIndex].file; // Set the source to the current song
            audioRef.current.play(); // Start playing the new song immediately
            setIsPlaying(true); // Update the playing state
        }
    }, [songs, currentSongIndex]);

    // Play/pause function
    const togglePlayPause = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Update current time as the song progresses
    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    // Set duration once the metadata (such as duration) is loaded
    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            const duration = audioRef.current.duration;
            setCurrentSongDuration(duration); // Set the duration in the Zustand store
        }
    };

    // Handle volume change
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100; // Volume is between 0 and 1
        }
    };

    // Change song to next or previous
    const handleNextSong = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length; // Calculate the next index
        setCurrentSongIndex(nextIndex); // Set the new index
    };

    const handlePrevSong = () => {
        const prevIndex =
            currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1; // Calculate the previous index
        setCurrentSongIndex(prevIndex); // Set the new index
    };

    return (
        <div className="player-section">
            {loading && <p>Loading songs...</p>}
            {error && <p>Error fetching songs: {error}</p>}
            {songs.length > 0 && (
                <div className="now-playing">
                    <img
                        src={songs[currentSongIndex].cover}
                        alt="Album Art"
                        className="art-image"
                    />
                    <h2>{songs[currentSongIndex].title}</h2>
                    <p>{songs[currentSongIndex].artist}</p>

                    <div className="duration">
                        <span className="current-time">
                            {formatDuration(currentTime)}{" "}
                            {/* Use the utility function */}
                        </span>
                        <input
                            type="range"
                            className="progress-bar"
                            min="0"
                            max={currentSongDuration}
                            value={currentTime}
                            onChange={(e) => {
                                const newTime = Number(e.target.value);
                                setCurrentTime(newTime); // Update current time state
                                if (audioRef.current) {
                                    audioRef.current.currentTime = newTime; // Update audio's current time
                                }
                            }} // Handle progress bar changes
                        />
                        <span className="total-time">
                            {formatDuration(currentSongDuration)}{" "}
                            {/* Use the utility function */}
                        </span>
                    </div>
                </div>
            )}

            <div className="controls">
                <button className="prev-button" onClick={handlePrevSong}>
                    ⏮️
                </button>
                <button className="play-button" onClick={togglePlayPause}>
                    {isPlaying ? "⏸️" : "▶️"}
                </button>
                <button className="next-button" onClick={handleNextSong}>
                    ⏭️
                </button>
                {/* Favorite Button */}
                <FavoriteButton
                    index={currentSongIndex}
                    isFavorite={favorites.includes(currentSongIndex)} // Check if current song is a favorite
                />
            </div>

            <div className="volume-control">
                <label htmlFor="volume">Volume</label>
                <input
                    type="range"
                    id="volume"
                    name="volume"
                    min="0"
                    max="100"
                    value={volume}
                    onChange={handleVolumeChange} // Handle volume changes
                />
            </div>

            {/* Audio element to play the local music */}
            <audio
                ref={audioRef}
                onTimeUpdate={handleTimeUpdate} // Updates the current time as the song plays
                onLoadedMetadata={handleLoadedMetadata} // Sets the song duration
            ></audio>
        </div>
    );
};

export default AudioPlayer;
