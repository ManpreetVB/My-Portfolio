import axios from 'axios';

const GITHUB_USERNAME = 'ManpreetVB'; 
const BASE_URL = 'https://api.github.com';

export const fetchProfile = async ( ) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${GITHUB_USERNAME}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
};

export const fetchRepositories = async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching repos:', error);
    return [];
  }
};