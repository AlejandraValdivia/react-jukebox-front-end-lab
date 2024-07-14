import * as trackService from "./services/trackService";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import TrackList from "./components/TrackList/TrackList";
import TrackForm from "./components/TrackForm/TrackForm";
import "./App.css";

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);

  useEffect(() => {
    const fetchDefaultData = async () => {
      try {
        const data = await trackService.show();
        setTracks(data);
        console.log("Tracks state after fetching:", data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchDefaultData();
  }, []);

  const playTrack = (track) => {
    setNowPlaying(track);
  };

  return (
    <>
      <Home />
      <TrackList tracks={tracks} playTrack={playTrack} />
      <TrackForm />
    </>
  );
};

export default App;

