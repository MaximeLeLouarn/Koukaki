// Hamburger Menu
// Turning button from lines to a cross
const menuLine1 = document.querySelector(".line1");
const menuLine2 = document.querySelector(".line2");
const menuLine3 = document.querySelector(".line3");
const buttonMenu = document.querySelector(".menuToggle");
const openedMenu = document.querySelector(".openedMenu");
const navBar = document.querySelector(".navBarContainer");
const burgerLinks = document.querySelectorAll(".activeLinks");

// Deployement of the Menu
buttonMenu.addEventListener("click", () => {
  menuLine1.classList.toggle("line1Transform");
  menuLine2.classList.toggle("hidden");
  menuLine3.classList.toggle("line3Transform");
  buttonMenu.classList.toggle("calibrateCross");
  openedMenu.classList.toggle("openingTheMenu");
  openedMenu.classList.toggle("fixedMenu");
  navBar.classList.toggle("fixedNavBar");
});
// Closing the menu when clicking on links
burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuLine1.classList.remove("line1Transform");
    menuLine2.classList.remove("hidden");
    menuLine3.classList.remove("line3Transform");
    buttonMenu.classList.remove("calibrateCross");
    openedMenu.classList.remove("openingTheMenu");
    openedMenu.classList.remove("fixedMenu");
    navBar.classList.remove("fixedNavBar");
  });
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

// Logo touching bottom line section
const logo = document.querySelector(".scrollingLogo");
const sectionBanner = document.querySelector(".banner");
const startScroll = 200;
const maxTop = 53; // Maximum top position in percentage

const updatePositions = () => {
  const logoHeight = logo.offsetHeight;
  const sectionHeight = sectionBanner.offsetHeight;

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    if (
      scrollPosition >= startScroll &&
      scrollPosition < sectionHeight + startScroll - logoHeight
    ) {
      // Calculate the top position of the logo
      const percentage =
        (scrollPosition - startScroll) / (sectionHeight - logoHeight);
      const newTop = 35 + 18 * percentage;
      logo.style.top = `${newTop}%`;
      logo.style.transform = `translateY(-${newTop}%)`;
    } else if (scrollPosition < startScroll) {
      // Reset the logo to its initial position
      logo.style.top = `35%`;
      logo.style.transform = `translateY(-50%)`;
    } else {
      // Fix the logo at the bottom of the first section
      logo.style.top = `53%`;
      logo.style.transform = `translateY(-100%)`;
    }
  });
};

updatePositions();
window.addEventListener("resize", updatePositions);
