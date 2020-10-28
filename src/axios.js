import axios from "axios";

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-a016d.cloudfunctions.net/api' // API (cloud function) URL
});

export default instance;


/*
 * Localhost: http://localhost:5001/challenge-a016d/us-central1/api
 */