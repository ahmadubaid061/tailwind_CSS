const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  mobileNav.classList.toggle("open");
  document.body.style.overflow = mobileNav.classList.contains("open")
    ? "hidden"
    : "";
});

document.querySelectorAll(".mNavLink").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
    document.body.style.overflow = "";
  });
});

const revealEls = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.15) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: [0, 0.15, 0.4] },
);

revealEls.forEach((el) => observer.observe(el));
