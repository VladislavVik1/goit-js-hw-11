import axios from "axios";

const API_KEY = "49353739-de52a4a64f2d40a4c6a535a2b"; // Замініть на ваш ключ
const BASE_URL = "https://pixabay.com/api/";

async function fetchImages(query) {
  const response = await axios.get(`${BASE_URL}`, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  });

  return response.data.hits; // Повертаємо масив зображень
}

export default fetchImages;
