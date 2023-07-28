function validateSignUpForm() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return false;
  }

  // Form is valid, continue with form submission
  // Form is valid, redirect to home.html
  window.location.href = "index.html";
  return true;
}
function validateForm() {
  // Form is valid, continue with form submission
  // Form is valid, redirect to home.html
  window.location.href = "home.html";
  return true;
}