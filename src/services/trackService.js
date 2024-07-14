const BASE_URL = 'http://localhost:3000/tracks';  // Ensure this URL is correct

export const show = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    console.log('Fetched data:', data);  // Add logging here
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);  // Add logging here
    throw error;
  }
};
