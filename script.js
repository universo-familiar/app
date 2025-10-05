document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mainNav = document.getElementById("mainNav");

  hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    mainNav.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    const clickedInside = hamburger.contains(e.target) || mainNav.contains(e.target);
    if (!clickedInside) {
      mainNav.classList.remove("open");
    }
  });

  const slides = document.querySelectorAll(".slide");
  const prev = document.querySelector(".prev");
  const next = document.querySelector(".next");
  let index = 0;

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "zoom");
      if (i === n) {
        slide.classList.add("active");
        setTimeout(() => slide.classList.add("zoom"), 50);
      }
    });
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  if (next && prev) {
    next.addEventListener("click", (e) => { e.stopPropagation(); nextSlide(); });
    prev.addEventListener("click", (e) => { e.stopPropagation(); prevSlide(); });
  }

  setInterval(nextSlide, 6000);
});




