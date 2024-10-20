import "./AudioPlayer.css";

import React, { useRef, useState, useEffect } from "react";

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false); // Track playing state
    const [currentTime, setCurrentTime] = useState(0); // Track current time for the progress bar
    const [duration, setDuration] = useState(0); // Track song duration
    const [volume, setVolume] = useState(80); // Track volume (0-100)

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
            setDuration(audioRef.current.duration);
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

    // Handle progress bar change to update current time
    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = Number(e.target.value);
        setCurrentTime(newTime); // Update current time state
        if (audioRef.current) {
            audioRef.current.currentTime = newTime; // Update audio's current time
        }
    };

    return (
        <div className="player-section">
            <div className="now-playing">
                <img
                    src="https://via.placeholder.com/300"
                    alt="Album Art"
                    className="art-image"
                />
                <h2>Song Title 1</h2>
                <p>Artist 1</p>
                <div className="duration">
                    <span className="current-time">
                        {Math.floor(currentTime)}
                    </span>
                    <input
                        type="range"
                        className="progress-bar"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange} // Handle progress bar changes
                    />
                    <span className="total-time">{Math.floor(duration)}</span>
                </div>
            </div>

            <div className="controls">
                <button className="prev-button">⏮️</button>
                <button className="play-button" onClick={togglePlayPause}>
                    {isPlaying ? "⏸️" : "▶️"}
                </button>
                <button className="next-button">⏭️</button>
                <button className="favorite-button player-favorite">❤️</button>
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
                src="/audio/flow.mp3" // Reference to your local file
                onTimeUpdate={handleTimeUpdate} // Updates the current time as the song plays
                onLoadedMetadata={handleLoadedMetadata} // Sets the song duration
            ></audio>
        </div>
    );
};

export default AudioPlayer;
