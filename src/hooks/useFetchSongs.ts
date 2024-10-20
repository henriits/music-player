// src/hooks/useFetchSongs.ts

import { useEffect, useState } from "react";

interface Song {
    title: string;
    artist: string;
    cover: string;
    duration: string;
    file: string;
}

const useFetchSongs = () => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSongs = async () => {
            try {
                const response = await fetch("/audio/songs.json");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setSongs(data);
            } catch (err) {
                // Type assertion to handle error as an instance of Error
                const error = err as Error;
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    return { songs, loading, error };
};

export default useFetchSongs;
