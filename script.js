// Dark Mode Toggle
const darkModeBtn = document.getElementById("darkModeBtn");
const icon = darkModeBtn.querySelector("i");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
    }
});

// Contact Form Submission
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    formStatus.textContent = "✅ Thank you! Your message has been sent.";
    form.reset();
});
