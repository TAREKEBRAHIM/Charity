document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.getElementById("nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const closeNav = document.getElementById("close-nav");
  
    navToggle.addEventListener("click", () => {
      navMenu.style.display = "block";
    });
  
    closeNav.addEventListener("click", () => {
      navMenu.style.display = "none";
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {});
  
  
  
  
  const slider = document.querySelector('.carousel-slider');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let currentIndex = 0;

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : 3;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < 3) ? currentIndex + 1 : 0;
    updateSlider();
});

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 25}%)`;
}





























