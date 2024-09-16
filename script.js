const carousel = document.querySelector('.carousel');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let currentIndex = 0;
const totalItems = document.querySelectorAll('.carousel-item').length;
const visibleItems = 3; // Número de cards visíveis
const maxIndex = totalItems - visibleItems;

rightArrow.addEventListener('click', () => {
    if (currentIndex < maxIndex) {
        currentIndex++;
    } else {
        currentIndex = 0; // Volta para o início do carrossel se estiver no final
    }
    carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = maxIndex; // Volta para o finaldo carrossel se estiver no começo
    }
    carousel.style.transform = `translateX(-${currentIndex * 33.33}%)`;
});
