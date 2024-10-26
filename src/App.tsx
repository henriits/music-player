import React from "react";
import "./App.css";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";

const App: React.FC = () => (
    <div className="music-player">
        <AudioPlayer />
    </div>
);

export default App;
