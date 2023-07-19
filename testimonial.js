const testimonialSlider = document.getElementById('testimonialSlider');
const testimonialForm = document.getElementById('testimonialForm');
const testimonialCardbox = document.getElementById('testimonialCardbox');

// Function to open testimonial cardbox
function openTestimonialCardbox() {
    testimonialCardbox.style.display = 'block';
}

// Function to close testimonial cardbox
function closeTestimonialCardbox() {
    testimonialCardbox.style.display = 'none';
    testimonialForm.reset();
}

// Function to add testimonial
function addTestimonial() {
    const testimonialText = testimonialForm.elements['testimonial'].value;
    const testimonialAuthor = testimonialForm.elements['name'].value;

    if (testimonialText && testimonialAuthor) {
        const testimonial = document.createElement('div');
        testimonial.classList.add('testimonial');
        testimonial.innerHTML = `
      <p class="testimonial-text">"${testimonialText}"</p>
      <h4 class="testimonial-author">${testimonialAuthor}</h4>
      <button class="delete-button" onclick="deleteTestimonial(this)">&#10006;</button>
    `;
        testimonialSlider.appendChild(testimonial);
        closeTestimonialCardbox();
    }
}

// Function to delete testimonial
function deleteTestimonial(button) {
    const testimonial = button.parentNode;
    testimonialSlider.removeChild(testimonial);
}

// Form submission event
testimonialForm.addEventListener('submit', function(e) {
    e.preventDefault();
    addTestimonial();
});

// Close cardbox event
testimonialCardbox.addEventListener('click', function(e) {
    if (e.target === testimonialCardbox) {
        closeTestimonialCardbox();
    }
});