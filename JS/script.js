// Hamburger Menu
// Turning button from lines to a cross
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
const menuLine3 = document.querySelector(".line3");
const buttonMenu = document.querySelector(".menuToggle");
const burgerLinks = document.querySelectorAll(".activeLinks");
const openedMenu = document.querySelector(".openedMenu");

buttonMenu.addEventListener("click", () => {
  menuLine1.classList.toggle("line1Transform");
  menuLine2.classList.toggle("hidden");
  menuLine3.classList.toggle("line3Transform");
  buttonMenu.classList.toggle("calibrateCross");
  openedMenu.classList.toggle("openingTheMenu");
});

// burgerLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     nav.classList.remove("active");
//   });
// });

// Animations au scroll
// Calling the DOM elements with variables
const fadeInBottom = document.querySelectorAll(".fadeIn");
const slideTheTitle = document.querySelectorAll(".slideTitle");

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
        entry.target.classList.add("slideInTitle");
        return;
      } else {
        entry.target.classList.remove("slideInTitle");
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
slideTheTitle.forEach((slide) => {
  observerTitles.observe(slide);
});

// Using GSAP for the clouds
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin);
gsap.to(".cloud", {
  xPercent: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".invisibleMark",
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
  },
});

// For the logo
const scrollTheLogo = document.querySelector(".scrollingLogo");
const sectionBanner = document.querySelector(".banner");

gsap.to(scrollTheLogo, {
  y: sectionBanner.clientHeight - scrollTheLogo.clientHeight,
  ease: "none",
  scrollTrigger: {
    trigger: sectionBanner,
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
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
