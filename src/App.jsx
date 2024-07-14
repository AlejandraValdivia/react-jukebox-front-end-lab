import React, { useState, useEffect } from 'react';
import { getAllTracks, addTrack, updateTrack, deleteTrack } from './services/trackService';
import Home from './components/Home/Home';
import TrackList from './components/TrackList/TrackList';
import TrackForm from './components/TrackForm/TrackForm';
import NowPlaying from './components/NowPlaying/NowPlaying';
import './App.css';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [editingTrack, setEditingTrack] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await getAllTracks();
      setTracks(data);
    };
    fetchTracks();
  }, []);

  const handlePlayTrack = (track) => {
    setNowPlaying(track);
  };

  const handleEditTrack = (track) => {
    setEditingTrack(track);
    setShowForm(true);
  };

  const handleDeleteTrack = async (id) => {
    await deleteTrack(id);
    setTracks(tracks.filter((track) => track._id !== id));
  };

  const handleSaveTrack = async (track) => {
    if (editingTrack) {
      const updatedTrack = await updateTrack(editingTrack._id, track);
      setTracks(tracks.map((t) => (t._id === editingTrack._id ? updatedTrack : t)));
    } else {
      const newTrack = await addTrack(track);
      setTracks([...tracks, newTrack]);
    }
    setShowForm(false);
    setEditingTrack(null);
  };

  const handleCancelForm = () => {
    setShowForm(false);
    setEditingTrack(null);
  };

  return (
    <div className="App">
      <Home />
      <button onClick={() => setShowForm(true)}>Add New Track</button>
      {showForm && (
        <TrackForm track={editingTrack} onSave={handleSaveTrack} onCancel={handleCancelForm} />
      )}
      <TrackList
        tracks={tracks}
        onPlay={handlePlayTrack}
        onEdit={handleEditTrack}
        onDelete={handleDeleteTrack}
      />
      <NowPlaying track={nowPlaying} />
    </div>
  );
};

export default App;
