
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

// Funzione per gestire lo slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000); // Cambio slide ogni 5 secondi
