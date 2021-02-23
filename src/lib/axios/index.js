import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jobs.github.com',
});

export default instance;

// https://cors-anywhere.herokuapp.com/
