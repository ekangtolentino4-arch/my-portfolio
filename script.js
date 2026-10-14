
// Get the theme toggle button from the HTML
const themeToggle = document.getElementById("theme-toggle");

// Run this function when the button is clicked
themeToggle.addEventListener("click", function () {
    // Switch between dark mode and light mode
    document.body.classList.toggle("light-mode");

    // Update the button icon based on the active theme
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "🌙";
        themeToggle.setAttribute("aria-label", "Switch to dark theme");
    } else {
        themeToggle.textContent = "☀️";
        themeToggle.setAttribute("aria-label", "Switch to light theme");
    }
});
