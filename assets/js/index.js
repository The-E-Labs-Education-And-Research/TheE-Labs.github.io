'use strict'
document.addEventListener('DOMContentLoaded', () => {
    console.log('C Programming Card loaded successfully!');
});

let slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides[currentIndex].classList.remove('active');
    slides[index].classList.add('active');
    currentIndex = index;
}

function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
}

// Start slideshow
setInterval(nextSlide, 5000); // every 5 seconds