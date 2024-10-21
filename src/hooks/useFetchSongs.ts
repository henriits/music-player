import { useEffect, useState } from "react";

interface Song {
    title: string;
    artist: string;
    cover: string;
    duration: number; // Duration in seconds
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
                const songsWithDuration = await Promise.all(
                    data.map(async (song: Song) => {
                        const duration = await getAudioDuration(song.file);
                        return { ...song, duration };
                    })
                );
                setSongs(songsWithDuration);
            } catch (err) {
                const error = err as Error;
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSongs();
    }, []);

    // Function to fetch audio duration
    const getAudioDuration = (file: string): Promise<number> => {
        return new Promise((resolve) => {
            const audio = new Audio(file);
            audio.addEventListener("loadedmetadata", () => {
                resolve(audio.duration);
            });
            audio.load(); // Start loading the audio to get metadata
        });
    };

    return { songs, loading, error };
};

export default useFetchSongs;
