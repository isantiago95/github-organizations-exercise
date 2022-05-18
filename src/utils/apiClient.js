import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com';

export const get = async url => {
  try {
    return await axios.get(url);
  } catch (error) {
    return error.response;
  }
};
