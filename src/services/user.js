
import axios from 'axios';

const API_URL = 'http://localhost:3000'; 

export async function addFavorite(recipe) {
  try {
    const userId = localStorage.getItem('userId');

    if (!userId) {
      throw new Error("User ID not found in localStorage");
    }
  
    const response = await axios.post(`${API_URL}/user/favorites`, { userId, recipe });

    return response;
  } catch (error) {
    throw error;
  }
}

export async function getFavorites() {
  try {
    const userId = localStorage.getItem('userId');
    const response = await axios.get(`${API_URL}/user/favorites`, { params: { userId } });
    return response.data;
  } catch (error) {
    console.error("Error fetching favorites:", error);
    throw error;
  }
}


  