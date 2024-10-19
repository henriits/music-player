import React from "react";
import "./App.css";

const App: React.FC = () => {
    return (
        <div className="music-player">
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
                        <span className="current-time">0:45</span>
                        <input
                            type="range"
                            className="progress-bar"
                            min="0"
                            max="100"
                            value="30"
                            readOnly
                        />
                        <span className="total-time">3:45</span>
                    </div>
                </div>

                <div className="controls">
                    <button className="prev-button">⏮️</button>
                    <button className="play-button">⏸️</button>
                    <button className="next-button">⏭️</button>
                    <button className="favorite-button player-favorite">
                        ❤️
                    </button>
                </div>

                <div className="volume-control">
                    <label htmlFor="volume">Volume</label>
                    <input
                        type="range"
                        id="volume"
                        name="volume"
                        min="0"
                        max="100"
                        value="80"
                    />
                </div>
            </div>

            <div className="content-container">
                <div className="all-songs">
                    <h3>All Songs</h3>
                    <ul>
                        <li className="song-item">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Cover"
                                className="song-cover"
                            />
                            <div className="song-info">
                                <h4>Song Title 1</h4>
                                <p>Artist 1</p>
                                <span>3:45</span>
                            </div>
                            <button className="favorite-button">❤️</button>
                        </li>
                        <li className="song-item">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Cover"
                                className="song-cover"
                            />
                            <div className="song-info">
                                <h4>Song Title 2</h4>
                                <p>Artist 2</p>
                                <span>4:00</span>
                            </div>
                            <button className="favorite-button">❤️</button>
                        </li>
                    </ul>
                </div>

                <div className="favorites-section">
                    <h3>Favorites</h3>
                    <ul>
                        <li className="song-item">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Cover"
                                className="song-cover"
                            />
                            <div className="song-info">
                                <h4>Favorited Song 1</h4>
                                <p>Artist 1</p>
                                <span>3:45</span>
                            </div>
                            <button className="remove-favorite-button">
                                ❌
                            </button>
                        </li>
                        <li className="song-item">
                            <img
                                src="https://via.placeholder.com/50"
                                alt="Cover"
                                className="song-cover"
                            />
                            <div className="song-info">
                                <h4>Favorited Song 2</h4>
                                <p>Artist 2</p>
                                <span>4:00</span>
                            </div>
                            <button className="remove-favorite-button">
                                ❌
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default App;
