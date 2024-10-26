import {
    FaPlay,
    FaPause,
    FaBackward,
    FaForward,
    FaVolumeUp,
} from "react-icons/fa";
import React, { useRef, useState, useEffect } from "react";
import useFetchSongs from "@/hooks/useFetchSongs";
import usePlayerStore from "@/store/store";
import { formatDuration } from "@/utils/durationUtils";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Modal from "../Modal/Modal";
import SongList from "../SongList/SongList";
import Favourites from "../Favorites/Favorites";
import "./AudioPlayer.css";

const AudioPlayer: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);

    const {
        currentSongIndex,
        setCurrentSongIndex,
        volume,
        setVolume,
        currentSongDuration,
        setCurrentSongDuration,
        favorites,
        isSongListOpen,
        isFavoritesOpen,
        toggleSongListModal,
        toggleFavoritesModal,
    } = usePlayerStore();

    const { songs, loading, error } = useFetchSongs();

    useEffect(() => {
        if (songs.length > 0 && audioRef.current) {
            audioRef.current.src = songs[currentSongIndex].file;
            // Only play if the user has already started playback
            if (isPlaying) {
                audioRef.current
                    .play()
                    .catch((error) => console.log("Playback failed:", error));
            }
        }
    }, [songs, currentSongIndex, isPlaying]);

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

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setCurrentSongDuration(audioRef.current.duration);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume / 100;
        }
    };

    const handleNextSong = () => {
        const nextIndex = (currentSongIndex + 1) % songs.length;
        setCurrentSongIndex(nextIndex);
    };

    const handlePrevSong = () => {
        const prevIndex =
            currentSongIndex === 0 ? songs.length - 1 : currentSongIndex - 1;
        setCurrentSongIndex(prevIndex);
    };

    return (
        <div className="player-wrapper">
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
                                {formatDuration(currentTime)}
                            </span>
                            <input
                                type="range"
                                className="progress-bar"
                                min="0"
                                max={currentSongDuration}
                                value={currentTime}
                                onChange={(e) => {
                                    const newTime = Number(e.target.value);
                                    setCurrentTime(newTime);
                                    if (audioRef.current) {
                                        audioRef.current.currentTime = newTime;
                                    }
                                }}
                            />
                            <span className="total-time">
                                {formatDuration(currentSongDuration)}
                            </span>
                        </div>
                    </div>
                )}

                <div className="controls">
                    <button className="prev-button" onClick={handlePrevSong}>
                        <FaBackward size={30} />
                    </button>
                    <button className="play-button" onClick={togglePlayPause}>
                        {isPlaying ? (
                            <FaPause size={30} />
                        ) : (
                            <FaPlay size={30} />
                        )}
                    </button>
                    <button className="next-button" onClick={handleNextSong}>
                        <FaForward size={30} />
                    </button>
                </div>
                <div className="volume-favorite-container">
                    <div className="volume-control">
                        <FaVolumeUp size={30} />
                        <input
                            type="range"
                            id="volume"
                            name="volume"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolumeChange}
                        />
                    </div>
                    <FavoriteButton
                        index={currentSongIndex}
                        isFavorite={favorites.includes(currentSongIndex)}
                    />
                </div>

                <div className="modal-buttons">
                    <button onClick={toggleSongListModal}>
                        Show Song List
                    </button>
                    <button onClick={toggleFavoritesModal}>
                        Show Favorites
                    </button>
                </div>

                {/* Modal container */}
                <div className="modal-container">
                    <Modal
                        isOpen={isSongListOpen}
                        onClose={toggleSongListModal}
                    >
                        <h2>Song List</h2>
                        <SongList />
                    </Modal>

                    <Modal
                        isOpen={isFavoritesOpen}
                        onClose={toggleFavoritesModal}
                    >
                        <h2>Favorites</h2>
                        <Favourites />
                    </Modal>
                </div>

                <audio
                    ref={audioRef}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                ></audio>
            </div>
        </div>
    );
};

export default AudioPlayer;
