import React, { useState, useEffect } from 'react';

const TrackForm = ({ track, onSave, onCancel }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

  useEffect(() => {
    if (track) {
      setTitle(track.title);
      setArtist(track.artist);
    } else {
      setTitle('');
      setArtist('');
    }
  }, [track]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, artist });
  };

  return (
    <div>
      <h2>{track ? 'Edit Track' : 'Add Track'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <button type="submit">{track ? 'Update' : 'Add'}</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default TrackForm;
