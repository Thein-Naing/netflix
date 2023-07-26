import axios from 'axios';

// create baseURL to make requests to movie database
const instance = axios.create({
  fetchURL:"https://api.themoviedb.org/3"
});


export default instance;
