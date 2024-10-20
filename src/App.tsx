import React from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer";
import SongList from "./components/SongList";
import Favourites from "./components/Favourites";

const App: React.FC = () => {
    return (
        <div className="music-player">
            <AudioPlayer />
            <div className="content-container">
                <SongList />
                <Favourites />
            </div>
        </div>
    );
};

export default App;
