const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const navLinks = navMobile.querySelectorAll("a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMobile.classList.toggle("active");
});

// Fechar menu ao clicar em um link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMobile.classList.remove("active");
  });
});

// Header com efeito no scroll
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 80) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Scroll Suave

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

// Whatsapp Integração

const whatsappButtons = document.querySelectorAll(".whatsapp-btn");

const phone = "5592981088441";
const message = encodeURIComponent(
  "Olá, Dra. Maria Isabella. Gostaria de obter uma orientação jurídica.",
);

whatsappButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  });
});

// ===== SCROLL ANIMATIONS com Intersection Observer =====

const observerOptions = {
    threshold: 0.,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar todos os elementos com classe scroll-reveal
const scrollElements = document.querySelectorAll('.scroll-reveal');
scrollElements.forEach(el => observer.observe(el));