const navLinks = document.querySelectorAll(".nav-links a, .footer-links a");
const sections = document.querySelectorAll("section");
const themeButton = document.querySelector(".theme-button");

sections.forEach((section) => {
  section.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  revealObserver.observe(section);
});

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.classList.remove("active-link");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active-link");
    }
  });
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((navLink) => navLink.classList.remove("active-link"));
    link.classList.add("active-link");
  });
});

const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.className = "back-to-top";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
  if (window.scrollY > 450) {
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.add("theme-clicked");
    themeButton.textContent = "✦";

    setTimeout(() => {
      themeButton.textContent = "☼";
      document.body.classList.remove("theme-clicked");
    }, 600);
  });
}