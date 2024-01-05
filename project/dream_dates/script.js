let slider = document.querySelector(".slider");
let currentSlide = 0;
let totalSlides = slider.querySelectorAll(".wrapper .left > div").length - 1;

function updateSlidePosition() {
  slider.querySelector(".wrapper .left div").style.marginTop = `${
    currentSlide * -100
  }vh`;
  slider.querySelector(".wrapper .right div").style.marginTop = `${
    (totalSlides - currentSlide) * -100
  }vh`;
}

slider.querySelector(".controls .up").addEventListener("click", function () {
  if (currentSlide === 0) {
    return;
  }
  currentSlide--;
  updateSlidePosition();
});

slider.querySelector(".controls .down").addEventListener("click", function () {
  if (currentSlide === totalSlides) {
    return;
  }
  currentSlide++;
  updateSlidePosition();
});

// Initialize the slide position
updateSlidePosition();
