// Funzione per aprire il popup (contatto)
function openPopup() {
    document.getElementById('popup').classList.add('show');
}

// Funzione per chiudere il popup (contatto)
function closePopup() {
    document.getElementById('popup').classList.remove('show');
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

    mainContent.classList.add('hidden');
    loader.style.display = 'flex';

    setTimeout(() => {
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 300);
    }, 2000);
}

// Funzione per gestire lo slider
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
setInterval(function() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
}, 5000);
