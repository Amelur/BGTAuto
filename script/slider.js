const sliderImages = document.querySelectorAll('.slider img');
const slideInterval = 4000; // интервал в миллисекундах

let currentImageIndex = 0;
sliderImages[currentImageIndex].classList.add('active');

setInterval(() => {
  sliderImages[currentImageIndex].classList.add('previous');
  currentImageIndex++;
  if (currentImageIndex >= sliderImages.length) {
    currentImageIndex = 0;
  }
  sliderImages[currentImageIndex].classList.add('active');
  setTimeout(() => {
    sliderImages[currentImageIndex].classList.remove('previous');
    sliderImages[currentImageIndex - 1].classList.remove('active');
  }, 1000);
  if (currentImageIndex === 13) {
    sliderImages[sliderImages.length - 1].classList.remove('active');
  }
}, slideInterval);
