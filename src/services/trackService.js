const BASE_URL = `http://localhost:3000/tracks`;

const show = async (track) => {
    try {
        const response = await fetch(BASE_URL + `/${track.id}`);
        const data = await response.json();
        console.log(data);
        return data;
       
    } catch (error) {
        console.error(error);
    }
}

export { show };