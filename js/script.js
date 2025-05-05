// =====================
// Popup Contatto
// =====================
function openPopup() {
    document.getElementById('popup').style.display = 'flex'; // "flex" per centrare
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// =====================
// Invio del form
// =====================
function sendForm(event) {
    event.preventDefault(); // Evita il comportamento predefinito

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Messaggio inviato con successo!');
            closePopup();
            form.reset();
        } else {
            alert('Errore durante l\'invio. Riprova.');
        }
    });
}

// =====================
// Slider automatico
// =====================
let currentIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

if (slides.length > 0) {
    showSlide(currentIndex);
    setInterval(nextSlide, 3000); // cambia ogni 3 secondi
}

// =====================
// Loader iniziale
// =====================
function loadPage() {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    mainContent.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.style.display = 'block';
    }, 2000);
}

window.onload = loadPage;
