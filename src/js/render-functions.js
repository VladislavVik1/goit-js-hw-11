export function renderImages(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Очищуємо галерею перед новим пошуком

  if (images.length === 0) {
    iziToast.warning({ title: "No Results", message: "Sorry, there are no images matching your search query. Please try again!" });
    return;
  }

  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <div class="image-card">
        <a href="${largeImageURL}" target="_blank">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${likes}</p>
          <p><strong>Views:</strong> ${views}</p>
          <p><strong>Comments:</strong> ${comments}</p>
          <p><strong>Downloads:</strong> ${downloads}</p>
        </div>
      </div>`
    )
    .join("");

  gallery.innerHTML = markup;
}
