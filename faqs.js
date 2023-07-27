// Get all toggle elements
var toggles = document.querySelectorAll('.toggle-Question');

// Loop through each toggle
toggles.forEach(function(toggle) {
    // Get toggle title and content
    var title = toggle.querySelector('.toggle-title');
    var content = toggle.querySelector('.toggle-content');

    // Add click event listener to the title
    title.addEventListener('click', function() {
        // Toggle the display of content
        content.classList.toggle('show');
        title.style.borderBottom = '0';
        content.style.borderTop = '0';
    });
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
