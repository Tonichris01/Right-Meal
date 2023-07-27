// Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Perform form submission or validation logic here
    // use fetch to send form data to a server

    // Clear form fields after submission
    contactForm.reset();
});

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
