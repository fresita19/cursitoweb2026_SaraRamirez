// --- 1. MENÚ HAMBURGUESA ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

}

// --- 2. CARRUSEL AUTOMÁTICO DE OFERTAS ---

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');

if (slides.length > 0 && dots.length === slides.length && btnPrev && btnNext) {

    let currentSlide = 0;
    let autoSlideTimer;

    function showSlide(index) {

        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }

        slides.forEach(slide => {
            slide.classList.remove('active');
        });

        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    function startAutoSlide() {
        autoSlideTimer = setInterval(nextSlide, 3500);
    }

    function resetAutoSlide() {
        clearInterval(autoSlideTimer);
        startAutoSlide();
    }

    btnNext.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    btnPrev.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    startAutoSlide();
}


// --- 2. Formulario de contacto ---

const formulario = document.querySelector('.formulario-contacto');

if (formulario) {

    formulario.addEventListener('submit', (event) => {

        event.preventDefault();

        alert('¡Gracias por contactar a SpookyStore! Hemos recibido tu mensaje de prueba.');

        formulario.reset();

    });

}
