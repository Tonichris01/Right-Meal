document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    // Send the data as a JSON payload using Fetch API
    fetch("submit_form.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formDataObject)
    })
    .then(response => response.json())
    .then(data => {
        // Handle the server response
        const thankYouMessage = document.getElementById("thank-you-message");
        thankYouMessage.textContent = data.message;
        thankYouMessage.style.display = "block";

        // Hide the thank-you message after 3 seconds
        setTimeout(() => {
            thankYouMessage.style.display = "none";
        }, 3000);
    })
    .catch(error => {
        console.error("Error occurred during form submission:", error);
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
