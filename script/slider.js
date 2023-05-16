// const sliderImages = document.querySelectorAll('.slider img');
// const slideInterval = 4000; // интервал в миллисекундах

// let currentImageIndex = 0;
// sliderImages[currentImageIndex].classList.add('active');

// setInterval(() => {
//   sliderImages[currentImageIndex].classList.add('previous');
//   currentImageIndex++;
//   if (currentImageIndex >= sliderImages.length) {
//     currentImageIndex = 0;
//   }
//   sliderImages[currentImageIndex].classList.add('active');
//   setTimeout(() => {
//     sliderImages[currentImageIndex].classList.remove('previous');
//     sliderImages[currentImageIndex - 1].classList.remove('active');
//   }, 1000);
//   if (currentImageIndex === 13) {
//     sliderImages[sliderImages.length - 1].classList.remove('active');
//   }
// }, slideInterval);

let currentSlide = 0;
const slideWrapper = document.querySelector('.slide-wrapper');
const slides = document.getElementsByClassName('slide');
const totalSlides = slides.length;

function showSlide(n) {
  if (n < 0) {
    currentSlide = totalSlides - 1;
  } else if (n >= totalSlides) {
    currentSlide = 0;
  }

  slideWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function startSlider() {
  setInterval(nextSlide, 4000); // Change slide every 3 seconds (adjust as needed)
}

showSlide(currentSlide); // Show initial slide
startSlider(); // Start the auto slider
