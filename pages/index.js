import { useState, useEffect } from "react";
import Playlist from "../components/Playlist";
import Player from "../components/Player";
import "../app/globals.css";

export default function Home(){
    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState (null)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const fetchSongs = async () => {
            const res = await fetch('/api/songs')
            const {data} = await res.json()
            setSongs(data)
        }

        fetchSongs()
    }, [])

    return(
        <div className="min-h-screen bg-gray-800">
            <h1 className="p-2 text-2xl font-bold text-center text-gray-100">Music Player</h1>
            <Playlist songs={songs} setCurrentSong={setCurrentSong} />
            <Player
                currentSong={currentSong}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
            />
        </div>
    )
}