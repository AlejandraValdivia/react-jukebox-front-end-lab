import './AddNewTrackButton.css';

const AddNewTrackButton = ({ addTrack }) => {
    const handleClick = () => {
        if (addTrack) {
            console.log("AddNewTrackButton: addTrack:", addTrack);
            addTrack();
        }
    };

    console.log("Rendering AddNewTrackButton with addTrack:", addTrack);

    return (
        <div>
            <button onClick={handleClick} className='add-new-track-btn'>
                Add new track
            </button>
        </div>
    );
};

export default AddNewTrackButton;
