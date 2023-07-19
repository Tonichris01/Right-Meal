// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform form submission or validation logic here
    // use fetch to send form data to a server

    // Clear form fields after submission
    contactForm.reset();
});