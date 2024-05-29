// initialize Swiper
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 95,
  loop: false,
  coverflowEffect: {
    rotate: 35,
    stretch: 0,
    depth: 35,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: {
    delay: 3000,
  },
});
