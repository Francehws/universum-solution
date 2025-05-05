
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 3000);
