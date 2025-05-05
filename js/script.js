// Popup
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Slider automatico
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

if (slides.length > 0) {
    showSlide(currentIndex); // mostra il primo slide

    setInterval(() => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }, 3000); // cambia immagine ogni 3 secondi
}
// Funzione per il caricamento della pagina
function loadPage() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Nascondi il contenuto principale e mostra il loader
    mainContent.style.display = 'none';
    loader.style.display = 'block';

    // Simula un caricamento di 2 secondi
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000);
}
// Carica la pagina al caricamento