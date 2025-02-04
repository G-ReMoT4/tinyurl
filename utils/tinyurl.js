import axios from 'axios';

export const shortenUrl = async (url) => {
  try {
    const response = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    return response.data;
  } catch (error) {
    console.error('Error shortening URL:', error);
    return null;
  }
};