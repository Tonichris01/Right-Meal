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
// function addTestimonial() {
//     const testimonialText = testimonialForm.elements['testimonial'].value;
//     const testimonialAuthor = testimonialForm.elements['name'].value;

//     if (testimonialText && testimonialAuthor) {
//         const testimonial = document.createElement('div');
//         testimonial.classList.add('testimonial');
//         testimonial.innerHTML = `
//       <p class="testimonial-text">"${testimonialText}"</p>
//       <h4 class="testimonial-author">${testimonialAuthor}</h4>
//       <button class="delete-button" onclick="deleteTestimonial(this)">&#10006;</button>
//     `;
//         testimonialSlider.appendChild(testimonial);
//         closeTestimonialCardbox();
//     }
// }

// Function to delete testimonial
// function deleteTestimonial(button) {
//     const testimonial = button.parentNode;
//     testimonialSlider.removeChild(testimonial);
// }

// Form submission event
// testimonialForm.addEventListener('submit', function(e) {
//     e.preventDefault();
//     // addTestimonial();
// });

// Close cardbox event
testimonialCardbox.addEventListener('click', function(e) {
    if (e.target === testimonialCardbox) {
        closeTestimonialCardbox();
    }
});

  //using localstorage
   // Function to add testimonial
   function addTestimonial(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const testimonialText = testimonialForm.elements['testimonial'].value;
    const testimonialAuthor = testimonialForm.elements['name'].value;

    if (testimonialText && testimonialAuthor) {
        const testimonial = {
            text: testimonialText,
            author: testimonialAuthor,
        };

        // Check if testimonials already exist in localStorage
        const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];
        testimonials.push(testimonial);

        // Save updated testimonials to localStorage
        localStorage.setItem('testimonials', JSON.stringify(testimonials));

        // Add testimonial to the page
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        testimonialDiv.innerHTML = `
            <p class="testimonial-text">"${testimonialText}"</p>
            <h4 class="testimonial-author">${testimonialAuthor}</h4>
            <button class="delete-button" onclick="deleteTestimonial(this)">&#10006;</button>
        `;
        testimonialSlider.appendChild(testimonialDiv);
        closeTestimonialCardbox();
    }
}

// Function to retrieve testimonials from localStorage and display them on the page
function displayTestimonials() {
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

    testimonials.forEach((testimonial) => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');
        testimonialDiv.innerHTML = `
            <p class="testimonial-text">"${testimonial.text}"</p>
            <h4 class="testimonial-author">${testimonial.author}</h4>
            <button class="delete-button" onclick="deleteTestimonial(this)">&#10006;</button>
        `;
        testimonialSlider.appendChild(testimonialDiv);
    });
}

// Function to delete testimonial
function deleteTestimonial(button) {
    const testimonialDiv = button.parentNode;
    const testimonials = JSON.parse(localStorage.getItem('testimonials')) || [];

    // Remove the deleted testimonial from the array
    const index = Array.from(testimonialSlider.children).indexOf(testimonialDiv);
    if (index !== -1) {
        testimonials.splice(index, 1);
        localStorage.setItem('testimonials', JSON.stringify(testimonials));
    }

    // Remove testimonial from the page
    testimonialSlider.removeChild(testimonialDiv);
}

// Form submission event
testimonialForm.addEventListener('submit', addTestimonial);

// Load existing testimonials from localStorage when the page loads
displayTestimonials();

// sign outbutton
const signOutIcon = document.getElementById("signOutIcon");

signOutIcon.addEventListener("click", () => {
  const shouldSignOut = window.confirm("Do you want to sign out?");
  if (shouldSignOut) {
    // Navigate to the index page (change "index.html" to your desired URL)
    window.location.href = "index.html";
  } else {
    // Remove the prompt if the user chooses not to sign out
    window.alert("Sign-out canceled.");
  }
});
