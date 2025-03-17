import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const MY_KEY = '49353739-de52a4a64f2d40a4c6a535a2b';

export function getRequest(request) {
    return axios.get(API_URL, {
        params: { 
            key: MY_KEY,
            q: request,
            image_type: 'photo',
            orientation: 'horizontal',
            safesearch: true
        }
    });
}