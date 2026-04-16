// DOM Elementlarini tanlab olish
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const playShowreel = document.querySelector('.play-showreel');

// --- MOBIL MENYUNI BOSHQARISH ---

// Menyuni ochish
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Menyuni yopish
closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// Menyu havolalaridan biri bosilganda menyuni yopish
const mobileNavLinks = document.querySelectorAll('.mobile-menu nav a');
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});

// --- SHOWREEL TUGMASI INTERAKTIVLIGI ---

// Play tugmasini bosganda konsolga xabar chiqarish (videoni yuklash uchun joy)
playShowreel.addEventListener('click', () => {
    alert("Showreel video pleerini shu yerda ochish mumkin.");
    // Masalan: video popupini ko'rsatish
});