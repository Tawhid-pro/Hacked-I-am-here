document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.carousel-img');
    const carouselInner = document.querySelector('.carousel-inner');
    let currentIndex = 0;

    const showImage = (index) => {
        const offset = index * -100; // Calculate the offset for sliding effect
        carouselInner.style.transform = `translateX(${offset}%)`;
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    document.querySelector('.right-arrow').addEventListener('click', nextImage);
    document.querySelector('.left-arrow').addEventListener('click', prevImage);

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        document.getElementById('response').innerText = `Thank you, ${name}! We will contact you shortly.`;
        form.reset();
    });
});
