import React, { useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import usePlayerStore from "@/store/store";
import "./VolumeControl.css";

const VolumeControl: React.FC = () => {
    const { volume, setVolume } = usePlayerStore();
    const [previousVolume, setPreviousVolume] = useState(volume);

    const toggleMute = () => {
        if (volume > 0) {
            setPreviousVolume(volume);
            setVolume(0);
        } else {
            setVolume(previousVolume);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
        setPreviousVolume(newVolume);
    };

    return (
        <div className="volume-control">
            <button className="volume-button" onClick={toggleMute}>
                {volume > 0 ? (
                    <FaVolumeUp size={30} />
                ) : (
                    <FaVolumeMute size={30} />
                )}
            </button>
            <input
                type="range"
                className="volume-slider"
                id="volume"
                name="volume"
                min="0"
                max="100"
                value={volume}
                onChange={handleVolumeChange}
            />
        </div>
    );
};

export default VolumeControl;
