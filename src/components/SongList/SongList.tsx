import "./SongList.css";

const SongList = () => {
    return (
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
    );
};
export default SongList;
