import * as trackService from './services/trackService';
import { useState, useEffect } from 'react';
import './App.css'

const App = () => {
  const [tracks, setTracks] = useState([]);
  
  useEffect(() => {
  const fetchDefaultData = async () => {
    const data = await trackService.show({ id: 1 });
    const newTrack = {
      artist: data.artist,
      name: data.name,
      album: data.album,
      genre: data.genre,
      duration: data.duration,
      id: 1
    }
    setTracks(data);
  };

  fetchDefaultData();
  }, []);

  const fetchData = async () => {
    const data = await trackService.show({ id: 1 });
    const newTrack = {
      artist: data.artist,
      name: data.name,
      album: data.album,
      genre: data.genre,
      duration: data.duration,
      id: 1
    }
    setTracks(newTrack);
  };

  console.log("State:", tracks);



  return (
    <>
      <main className='main'>
        <h1>React Jukebox</h1>
        
      </main>
    </>
  )
};

export default App;
