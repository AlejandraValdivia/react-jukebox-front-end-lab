import './Track.css';

const Track = ({ track }) => {
    return (
        <div className="track">
            <h3>{track.title}</h3>
            <p>{track.artist}</p>
        </div>
    )
}

export default Track