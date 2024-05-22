// Animations au scroll
// Calling the DOM elements with variables
const fadeInBottom = document.querySelectorAll(".fadeIn");
const slideInTitle = document.querySelectorAll(".slideTitle");

// Creating a variable to observ if the elements are visible on screen

// With the sections
const observerSections = new IntersectionObserver(
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
    threshold: 0,
  }
);

// with the titles
const observerTitles = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slideTitle");
        return;
      } else {
        entry.target.classList.remove("slideTitle");
      }
    });
  },
  {
    rootMargin: "0px",
    threshold: 0,
  }
);

// Launching loops to observe desired elements

// For the sections
fadeInBottom.forEach((fade) => {
  observerSections.observe(fade);
});

// For the titles
slideInTitle.forEach((slide) => {
  observerTitles.observe(slide);
});

// Using scrollMagic for the clouds
const flightPath = {
  curviness: 1,
  autorotate: true,
  values: [
    { x: 100, y: 20 },
    { x: 300, y: 10 },
  ],
};
const tween = new TimelineLite();
tween.add(
  TweenLite.to(".cloud", 1, {
    bezier: flightPath,
    ease: Power1.easeInOut,
  })
);
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
