// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const navLinks = document.querySelector('.nav-links');

    if (burgerBtn && navLinks) {
        burgerBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    }

    // Modal screenshot viewer
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const modalClose = document.querySelector('.modal-close');
    const screenshots = document.querySelectorAll('.screenshot-item img');

    if (modal && modalImg) {
        screenshots.forEach(img => {
            img.parentElement.addEventListener('click', () => {
                modalImg.src = img.src;
                modal.classList.add('active');
            });
        });

        if (modalClose) {
            modalClose.addEventListener('click', () => {
                modal.classList.remove('active');
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    }
});
