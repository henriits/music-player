import React, { useState } from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import SongList from "./components/SongList/SongList";
import Favourites from "./components/Favorites/Favorites";
import Modal from "./components/Modal/Modal";

const App: React.FC = () => {
    const [isSongListOpen, setIsSongListOpen] = useState(false);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);

    const handleSongListOpen = () => setIsSongListOpen(true);
    const handleFavoritesOpen = () => setIsFavoritesOpen(true);
    const closeModal = () => {
        setIsSongListOpen(false);
        setIsFavoritesOpen(false);
    };

    return (
        <div className="music-player">
            <AudioPlayer />
            <div className="modal-buttons">
                <button onClick={handleSongListOpen}>Show Song List</button>
                <button onClick={handleFavoritesOpen}>Show Favorites</button>
            </div>

            <Modal isOpen={isSongListOpen} onClose={closeModal}>
                <h2>Song List</h2>
                <SongList />
            </Modal>

            <Modal isOpen={isFavoritesOpen} onClose={closeModal}>
                <h2>Favorites</h2>
                <Favourites />
            </Modal>
        </div>
    );
};

export default App;
