// ============================
// Reservation Popup
// ============================

function openPopup() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

// Close popup when clicking outside
window.addEventListener("click", (e) => {
    const popup = document.getElementById("popup");

    if (e.target === popup) {
        closePopup();
    }
});

// ============================
// Smooth Scroll Buttons
// ============================

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ============================
// 3D Mouse Movement Effect
// ============================

const content = document.querySelector(".content");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 30;

    const y =
        (window.innerHeight / 2 - e.clientY) / 30;

    content.style.transform =
        `rotateY(${x}deg) rotateX(${-y}deg)`;
});

// Reset on mouse leave
document.addEventListener("mouseleave", () => {
    content.style.transform =
        "rotateY(0deg) rotateX(0deg)";
});

// ============================
// Animated Menu Cards
// ============================

const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -20;

        const rotateY =
            ((x / rect.width) - 0.5) * 20;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";
    });
});

// ============================
// Reservation Form
// ============================

const reserveBtn =
    document.querySelector(".reserve");

if (reserveBtn) {

    reserveBtn.addEventListener("click", () => {

        const name =
            document.querySelector(
                'input[type="text"]'
            ).value;

        const date =
            document.querySelector(
                'input[type="date"]'
            ).value;

        const guests =
            document.querySelector(
                'input[type="number"]'
            ).value;

        if (!name || !date || !guests) {

            alert(
                "Please fill all fields before reserving."
            );

            return;
        }

        alert(
            `Thank you ${name}!\n\nYour table for ${guests} guest(s) has been reserved for ${date}.`
        );

        closePopup();
    });
}

// ============================
// Scroll Reveal Animation
// ============================

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";
            }
        });

    }, {
        threshold: 0.2
    });

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(50px)";

    card.style.transition =
        "all 0.8s ease";

    observer.observe(card);
});

// ============================
// Dynamic Hero Text
// ============================

const heroTitle =
    document.querySelector(".content h1");

const texts = [
    "Taste Haven",
    "Fresh & Delicious",
    "Luxury Dining",
    "Food You'll Love"
];

let index = 0;

setInterval(() => {

    if (heroTitle) {

        index++;

        if (index >= texts.length) {
            index = 0;
        }

        heroTitle.style.opacity = "0";

        setTimeout(() => {

            heroTitle.textContent = texts[index];

            heroTitle.style.opacity = "1";

        }, 300);
    }

}, 3000);