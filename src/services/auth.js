import axios from 'axios';

const API_URL = 'http://localhost:3000';

export async function login(credentials) {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, credentials);
    const userId = response.data.user_id;
    localStorage.setItem('userId', userId); 
    return response;
  } catch (error) {
    throw error;
  }
}




export async function register(userDetails) {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, userDetails, { withCredentials: true });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function logout() {
  try {
    const response = await axios.post(`${API_URL}/auth/logout`, {}, { withCredentials: true });
    localStorage.removeItem('userId'); 
    return response.data;
  } catch (error) {
    throw error;
  }
}
