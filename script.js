document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.popular__slider');
    const slides = document.querySelectorAll('.popular_slide');
    const controls = document.querySelectorAll('.popular_control');
  
    const slideCount = slides.length;
    let currentSlide = 0;
  
    function nextSlide() {
      if (currentSlide < slideCount - 1) {
        currentSlide++;
        updateSliderPosition();
      }
    }
  
    function prevSlide() {
      if (currentSlide > 0) {
        currentSlide--;
        updateSliderPosition();
      }
    }
  
    function updateSliderPosition() {
      const newPosition = -currentSlide * 100;
      slider.style.transform = `translateX(${newPosition}%)`;
    }

    controls.forEach((control, index) => {
      control.addEventListener('click', function () {
        currentSlide = index;
        updateSliderPosition();
      });
    });
  });
  