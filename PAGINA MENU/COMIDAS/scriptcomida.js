// JavaScript para activar/desactivar el menú hamburguesa
const menuToggle = document.querySelector('#mobile-menu');
const navLinks = document.querySelector('#nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Desplazamiento en la barra de categorías
const categoryList = document.getElementById('category-list');
const scrollLeftBtn = document.getElementById('scroll-left');
const scrollRightBtn = document.getElementById('scroll-right');

scrollLeftBtn.addEventListener('click', () => {
    categoryList.scrollBy({ left: -150, behavior: 'smooth' });
});

scrollRightBtn.addEventListener('click', () => {
    categoryList.scrollBy({ left: 150, behavior: 'smooth' });
});

