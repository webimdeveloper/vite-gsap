export function getRandomImageUrl() {
  document.querySelectorAll('.js-random-img').forEach((img, i) => {
    const width = Math.floor(Math.random() * 300) + 400;  // 400–700
    const height = Math.floor(Math.random() * 200) + 300; // 300–500
    const seed = i + 1; // ensures a different image per element

    img.src = `https://picsum.photos/${width}/${height}?random=${seed}`;
    img.alt = `Random image ${seed}`;
  });
}