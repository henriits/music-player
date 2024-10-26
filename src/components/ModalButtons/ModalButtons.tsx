import React from "react";
import Modal from "../Modal/Modal";
import SongList from "../SongList/SongList";
import Favorites from "../Favorites/Favorites";
import usePlayerStore from "@/store/store";

const ModalButtons: React.FC = () => {
    const {
        isSongListOpen,
        isFavoritesOpen,
        toggleSongListModal,
        toggleFavoritesModal,
    } = usePlayerStore();

    return (
        <div className="modal-buttons">
            <button onClick={toggleSongListModal}>Show Song List</button>
            <button onClick={toggleFavoritesModal}>Show Favorites</button>

            <Modal isOpen={isSongListOpen} onClose={toggleSongListModal}>
                <h2>Song List</h2>
                <SongList />
            </Modal>

            <Modal isOpen={isFavoritesOpen} onClose={toggleFavoritesModal}>
                <h2>Favorites</h2>
                <Favorites />
            </Modal>
        </div>
    );
};

export default ModalButtons;
