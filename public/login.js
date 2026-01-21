form.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  // Reset message before validating
  message.textContent = "";
  message.className = "muted";

  // Validate email
  if (!email) {
    showError("Email is required.");
    return;
  }

  // Validate password
  if (password.length < 6) {
    showError("Password must be at least 6 characters long.");
    return;
  }

  // Simulate loading state
  message.textContent = "Signing in...";
  message.className = "loading";

  const button = form.querySelector("button");
  button.disabled = true;

  // Fake delay to simulate authentication
  setTimeout(() => {
    button.disabled = false;
    showSuccess("Login successful (simulated).");
  }, 1000);
});


// Clear feedback when user starts typing again
["email", "password"].forEach((id) => {
  document.getElementById(id).addEventListener("input", () => {
    message.textContent = "";
    message.className = "muted";
  });
});