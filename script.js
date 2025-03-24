document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const form = document.getElementById("contactForm");

    // Sticky Navbar Effect on Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Contact Form Submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Message Sent Successfully!");
        form.reset();
    });
});


const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
