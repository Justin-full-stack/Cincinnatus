"use strict";
document.addEventListener('DOMContentLoaded', () => {
    // Gallery Observer
    const cards = document.querySelectorAll('.image-card');
    const observerOptions = {
        threshold: 0.25
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    cards.forEach(c => observer.observe(c));
    // Simple TypeScript feature: Dark mode toggle
    const header = document.querySelector('.site-header__inner');
    if (header) {
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Alternar Modo Oscuro';
        toggleBtn.style.marginLeft = '20px';
        toggleBtn.style.padding = '8px 16px';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.backgroundColor = '#fff';
        toggleBtn.style.color = '#333';
        toggleBtn.style.border = 'none';
        toggleBtn.style.borderRadius = '4px';
        toggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
        header.appendChild(toggleBtn);
    }
});
