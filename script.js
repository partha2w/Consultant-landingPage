// Header Animation---
document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome to Our Consulting Company";
    let index = 0;
    const typingSpeed = 50;
    const element = document.getElementById("typing-text");

    function typeText() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); // Start the animation
});

// Subheading Animation
document.addEventListener("DOMContentLoaded", function () {
    const textElement = document.getElementById("dynamic-text");
    const phrases = [
        "We provide expert consulting services",
        "We help your business grow",
        "Your success is our priority",
        "Transforming ideas into reality"
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 80; 
    const deletingSpeed = 25; 

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];

        textElement.textContent = currentPhrase.substring(0, charIndex);

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                phraseIndex = (phraseIndex + 1) % phrases.length;
            }
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect(); // Start animation
});

// Scroll animation on Services
document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service-item");

    function handleScroll() {
        serviceItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.9) {
                item.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load
});


