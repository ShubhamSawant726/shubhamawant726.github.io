// DARK / LIGHT MODE
const toggleBtn = document.getElementById("theme-toggle");
document.body.classList.add("light");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.body.classList.toggle("light");

  toggleBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// SCROLL REVEAL
function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach((sec) => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 100) {
      sec.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// BACK TO TOP
const topBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 400 ? "block" : "none";
});

topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
