import React from "react";
import { FaVolumeUp } from "react-icons/fa";
import usePlayerStore from "@/store/store";
import "./VolumeControl.css";

const VolumeControl: React.FC = () => {
    const { volume, setVolume } = usePlayerStore();

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value);
        setVolume(newVolume);
    };

    return (
        <div className="volume-control">
            <FaVolumeUp size={30} />
            <input
                type="range"
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
