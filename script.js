// Animations au scroll
// Calling the DOM elements with variables
const fadeInBottom = document.querySelectorAll(".fadeIn");

// Implementing th functions
// function slideInBottom() {
//   fadeInBottomAll.classList.add("fadeInBottom");
// }
// function deSlideInBottom() {
//   fadeInBottomAll.classList.remove("fadeInBottom");
// }
// function slideInBottom2() {}

const observerBottom = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeInBottom");
        return;
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0.1,
  }
);

fadeInBottom.forEach((fade) => {
  observerBottom.observe(fade);
});

// Going through the scroll
// Implementing the scroll
// let scrollPosition = 0;
// let p = false;
// window.addEventListener("scroll", () => {
//   scrollPosition = window.scrollY;

//   if (!p) {
//     window.requestAnimationFrame(() => {
//       slideInBottom(scrollPosition);
//       p = false;
//     });
//   }

//   p = true;
// });
