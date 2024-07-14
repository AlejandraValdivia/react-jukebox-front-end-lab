import Track from "../Track/Track";
import { tracks } from "../../data/data";
import './TrackList.css';

const TrackList = (props) => {
    const { tracks } = props;

    const renderTrack = (track) => (
        <Track key={track._id} track={track} />
    );

    const renderedTracks = tracks.map(renderTrack);

    return (
        <div className="track-list">
            {renderedTracks}
        </div>
    );
};

export default TrackList;
