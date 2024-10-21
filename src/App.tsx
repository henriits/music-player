import React from "react";
import "./App.css";
import "./Responsive.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import SongList from "./components/SongList/SongList";
import Favourites from "./components/Favorites/Favorites";

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
