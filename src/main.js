import './style.css';
import { getRandomImageUrl } from './ImgRandom.js';

// Call the function after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  getRandomImageUrl();
});