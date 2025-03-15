import fetchData from  "./js/render-functions.js";
import moduleName from "./js/pixabay-api.js";

const form = document.getElementById("search-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const query = event.target.elements["search-text"].value.trim();
  
  if (!query) {
    console.warn("Порожній запит");
    return;
  }

  try {
    const images = await fetchImages(query);
    renderImages(images);
  } catch (error) {
    console.error("Помилка отримання зображень:", error);
  }
});