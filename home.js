const slideshow = document.querySelector('.slideshow');
const slideWidth = slideshow.offsetWidth / 2;

let currentPosition = 0;

function slideNext() {
    currentPosition -= slideWidth;
    slideshow.style.transform = `translateX(${currentPosition}px)`;

    if (Math.abs(currentPosition) >= slideWidth * 7) {
        currentPosition = 0;
        setTimeout(() => {
            slideshow.style.transition = 'none';
            slideshow.style.transform = `translateX(${currentPosition}px)`;
            setTimeout(() => {
                slideshow.style.transition = 'transform 0.5s ease-in-out';
            }, 10);
        }, 5000);
    }
}

setInterval(slideNext, 5000);




// Smooth scrolling for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});