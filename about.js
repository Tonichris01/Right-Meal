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
