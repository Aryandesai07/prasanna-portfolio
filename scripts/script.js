/* ==========================================================
                DOM ELEMENTS
========================================================== */

const navbar = document.querySelector(".navbar");

const navLinks = document.querySelectorAll(".navlink");

const sections = document.querySelectorAll("section");

const backToTop = document.querySelector(".back-to-top");

/* ==========================================================
                ACTIVE NAVIGATION
========================================================== */

function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.id;
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", updateActiveNav);
window.addEventListener("load", updateActiveNav);


/* ==========================================================
        SMOOTH SCROLL + AUTO CLOSE MOBILE MENU
========================================================== */

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

        // Close Bootstrap mobile menu
        const navbarCollapse = document.querySelector(".navbar-collapse");

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse) ||
                new bootstrap.Collapse(navbarCollapse);

            bsCollapse.hide();

        }

    });

});
/* ==========================================================
                NAVBAR SCROLL EFFECT
========================================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.classList.add("navbar-scrolled");

    }

    else {

        navbar.classList.remove("navbar-scrolled");

    }

});

/* ==========================================================
                BACK TO TOP BUTTON
========================================================== */

window.addEventListener("scroll", () => {

    if (!backToTop) return;

    if (window.scrollY > 400) {

        backToTop.style.opacity = "1";

        backToTop.style.visibility = "visible";

    }

    else {

        backToTop.style.opacity = "0";

        backToTop.style.visibility = "hidden";

    }

});

if (backToTop) {

    backToTop.addEventListener("click", (e) => {

        e.preventDefault();

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/* ==========================================================
                END OF PART 1
========================================================== */

/* ==========================================================
                TYPING ANIMATION
                PART 2
========================================================== */

const typingElement = document.getElementById("typing-span");

const typingWords = [

    "Full Stack Developer",

    "Python Developer",

    "ASP.NET Developer",

    "React Native Developer",

    "FastAPI Developer",

    "Cloud Enthusiast",

    "Problem Solver"

];

let wordIndex = 0;

let charIndex = 0;

let isDeleting = false;

function typeEffect() {

    if (!typingElement) return;

    const currentWord = typingWords[wordIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    }

    else {

        typingElement.textContent =
            currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            isDeleting = false;

            wordIndex++;

            if (wordIndex >= typingWords.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 50 : 110);

}

typeEffect();

/* ==========================================================
                PREMIUM ANIMATED COUNTERS
========================================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;

            const target = Number(counter.dataset.target);

            const symbol = counter.dataset.symbol || "+";

            counter.classList.add("counting");

            let current = 0;

            const interval = setInterval(() => {

                current++;

                counter.textContent = current + symbol;

                if (current >= target) {

                    clearInterval(interval);

                    counter.textContent = target + symbol;

                    counter.classList.remove("counting");
                    counter.classList.add("finished");

                }

            }, 50); // Change this value for speed

            counterObserver.unobserve(counter);

        });

    },

    {
        threshold: 0.5
    }

);

counters.forEach((counter) => {

    counterObserver.observe(counter);

});
/* ==========================================================
                FADE IN ON SCROLL
========================================================== */

const revealElements = document.querySelectorAll(

    ".project-card, .service-card, .achievement-card"

);

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold:0.2

    }

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});

/* ==========================================================
                END OF PART 2
========================================================== */

/* ==========================================================
                PROJECT FILTER
                PART 3
========================================================== */

const filterButtons = document.querySelectorAll(".project-filter button");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter = button.innerText.toLowerCase();

        projectCards.forEach(card => {

            if (filter === "all") {

                card.style.display = "block";

                return;

            }

            const tags = card.innerText.toLowerCase();

            if (tags.includes(filter)) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }

        });

    });

});
/* ==========================================================
                MOBILE MENU AUTO CLOSE
========================================================== */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth < 992 &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getOrCreateInstance(navbarCollapse);

            bsCollapse.hide();

        }

    });

});
/* ==========================================================
                BUTTON RIPPLE EFFECT
========================================================== */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function (e) {

        const ripple = document.createElement("span");

        const rect = this.getBoundingClientRect();

        ripple.style.left =

            e.clientX - rect.left + "px";

        ripple.style.top =

            e.clientY - rect.top + "px";

        ripple.className = "ripple";

        this.appendChild(ripple);

        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});

/* ==========================================================
                PAGE LOADED
========================================================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    updateActiveNav();

});

/* ==========================================================
                EMAILJS CONTACT FORM
========================================================== */

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("sendBtn");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        sendBtn.disabled = true;

        sendBtn.innerHTML = `
            <i class="bi bi-hourglass-split"></i>
            Sending...
        `;

        emailjs.sendForm(
            "service_nf4khs8",
            "template_wv0in8w",
            this
        )

        .then(() => {

            sendBtn.innerHTML = `
                <i class="bi bi-check-circle-fill"></i>
                Message Sent
            `;

            alert("✅ Thank you! Your message has been sent successfully.");

            contactForm.reset();

            setTimeout(() => {

                sendBtn.disabled = false;

                sendBtn.innerHTML = `
                    <i class="bi bi-send-fill"></i>
                    <span>Send Message</span>
                `;

            }, 2500);

        })

        .catch((error) => {

            console.error(error);

            alert("❌ Failed to send message. Please try again.");

            sendBtn.disabled = false;

            sendBtn.innerHTML = `
                <i class="bi bi-send-fill"></i>
                <span>Send Message</span>
            `;

        });

    });

}

/* ==========================================================
                    PREMIUM LOADER
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    document.body.style.overflow = "hidden";

    setTimeout(() => {

        loader.classList.add("hide");

        document.body.style.overflow = "auto";

        setTimeout(() => {

            if (loader.parentNode) {
                loader.remove();
            }

        }, 800);

    }, 2500);

});