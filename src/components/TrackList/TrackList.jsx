import React from 'react';
import './TrackList.css';

const TrackList = ({ tracks, onPlay, onEdit, onDelete }) => {
  return (
    <div className="track-list">
      {tracks.map((track) => (
        <div key={track._id} style={{ marginBottom: '10px' }}>
          <p>{track.title} by {track.artist}</p>
          <button onClick={() => onPlay(track)}>Play</button>
          <button onClick={() => onEdit(track)}>Edit</button>
          <button onClick={() => onDelete(track._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
