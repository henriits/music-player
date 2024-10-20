import "./AudioPlayer.css";

import React, { useRef, useState, useEffect } from "react";

interface Song {
    title: string;
    artist: string;
    cover: string;
    duration: string;
    file: string;
}

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(80);
    const [songs, setSongs] = useState<Song[]>([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    useEffect(() => {
        // Fetch the song data from songs.json
        fetch("/audio/songs.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setSongs(data);
                if (data.length > 0 && audioRef.current) {
                    audioRef.current.src = data[0].file; // Set the source to the first song
                }
            })
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    // Update the audio source when the song changes
    useEffect(() => {
        if (audioRef.current && songs.length > 0) {
            audioRef.current.src = songs[currentSongIndex].file;
            audioRef.current.play();
            setIsPlaying(true);
        }
    }, [currentSongIndex, songs]);

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

    // Change song to next or previous
    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    };

    const handlePrevSong = () => {
        setCurrentSongIndex((prevIndex) =>
            prevIndex === 0 ? songs.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="player-section">
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
                        <span className="total-time">
                            {Math.floor(duration)}
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
                onTimeUpdate={handleTimeUpdate} // Updates the current time as the song plays
                onLoadedMetadata={handleLoadedMetadata} // Sets the song duration
            ></audio>
        </div>
    );
};

export default AudioPlayer;
