// Funzione per aprire il popup (contatto)
function openPopup() {
    document.getElementById('popup').style.display = 'flex';
}

// Funzione per chiudere il popup (contatto)
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Funzione per inviare la mail (aggiungere la logica qui)
function sendForm() {
    alert('Il tuo messaggio è stato inviato con successo!');
    closePopup();
}

// Funzione per scorrere alla sezione specificata
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}

// Funzione per caricare la pagina e nascondere il loader
function loadPage() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Nascondi il contenuto principale e mostra il loader
    mainContent.style.display = 'none';
    loader.style.display = 'flex';  // usiamo 'flex' per centrare il contenuto

    // Simula un caricamento di 2 secondi
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000);
}

// Funzione per gestire lo slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000); // Cambio slide ogni 5 secondi
