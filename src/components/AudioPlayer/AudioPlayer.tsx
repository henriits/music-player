import "./AudioPlayer.css";

const AudioPlayer = () => {
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
                    value="80"
                />
            </div>
        </div>
    );
};
export default AudioPlayer;
