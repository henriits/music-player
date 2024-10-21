import "./Favorites.css";

const Favourites = () => {
    return (
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
                    <button className="remove-favorite-button">❌</button>
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
                    <button className="remove-favorite-button">❌</button>
                </li>
            </ul>
        </div>
    );
};
export default Favourites;
