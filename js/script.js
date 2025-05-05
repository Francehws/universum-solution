// Funzione per aprire il popup (contatto)
function openPopup() {
    document.getElementById('popup').style.display = 'block';
}

// Funzione per chiudere il popup (contatto)
function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Funzione per inviare la mail (aggiungere la logica per il form)
function sendForm() {
    // Inviare i dati del form tramite Formspree o altra logica
    // Qui potresti aggiungere un'eventuale logica di validazione dei dati
    alert('Form inviato con successo!');
    closePopup(); // Chiude il popup dopo invio
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
window.onload = loadPage;
