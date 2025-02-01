/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

    // Function to toggle chat options
    function toggleChat(event) {
        event.preventDefault(); // Prevent default link behavior
        const chatOptions = document.getElementById('chat-options');
        const chatWhatsApp = document.getElementById('chat-whatsapp');
        const chatCall = document.getElementById('chat-call');
        const chatEmail = document.getElementById('chat-email');
    
        const isHidden = chatOptions.classList.contains('d-none');
    
        if (isHidden) {
            // Show chat options
            chatOptions.classList.remove('d-none');
    
            // Reveal the icons one by one with a slight delay
            setTimeout(() => { chatEmail.classList.remove('d-none'); }, 100);
            setTimeout(() => { chatCall.classList.remove('d-none'); }, 300);
            setTimeout(() => { chatWhatsApp.classList.remove('d-none'); }, 500);
        } else {
            // Hide all options instantly
            chatEmail.classList.add('d-none');
            chatCall.classList.add('d-none');
            chatWhatsApp.classList.add('d-none');
            chatOptions.classList.add('d-none');
        }
    }


// Show or hide the Back to Top button on scroll
window.addEventListener("scroll", function () {
    const backToTop = document.getElementById("back-to-top");
    if (window.scrollY > 300) {
        backToTop.classList.remove("d-none");
        backToTop.style.right = "20px"; // Adjusted positioning
        backToTop.style.bottom = "20px";
    } else {
        backToTop.classList.add("d-none");
    }
});

// Smooth scroll to top
function scrollToTop(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
}


document.addEventListener("DOMContentLoaded", function () {
    const titles = [
        "Software Engineer",
        "Fullstack Developer",
        "Graphic Designer",
        "Video Editor",
        "Photographer",
    ];
    const typedText = document.getElementById("typed-text");
    let index = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 200;

    function type() {
        const currentTitle = titles[index];

        if (isDeleting) {
        typedText.textContent = currentTitle.substring(0, charIndex--);
        delay = 100; // Speed up while deleting
        } else {
        typedText.textContent = currentTitle.substring(0, charIndex++);
        delay = 200; // Normal typing speed
        }

        if (!isDeleting && charIndex === currentTitle.length) {
        delay = 1500; // Pause at the end of a title
        isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % titles.length; // Loop through titles
        delay = 500; // Pause before typing next title
        }

        setTimeout(type, delay);
    }

    type();
    });


    document.addEventListener('DOMContentLoaded', function () {
        const showMoreBtn = document.getElementById('show-more-btn');
        const showLessBtn = document.getElementById('show-less-btn');
        const expertiseItems = document.querySelectorAll('#expertise-list .expertise-item');

        showMoreBtn.addEventListener('click', function () {
            // Show all items
            expertiseItems.forEach(item => item.classList.remove('d-none'));
            // Toggle buttons
            showMoreBtn.classList.add('d-none');
            showLessBtn.classList.remove('d-none');
        });

        showLessBtn.addEventListener('click', function () {
            // Hide items beyond the first 4
            expertiseItems.forEach((item, index) => {
                if (index >= 4) {
                    item.classList.add('d-none');
                }
            });
            // Toggle buttons
            showLessBtn.classList.add('d-none');
            showMoreBtn.classList.remove('d-none');
        });
    });
