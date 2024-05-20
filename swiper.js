// initialize Swiper
const swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  spaceBetween: 95,
  loop: true,
  coverflowEffect: {
    rotate: 35,
    stretch: 0,
    depth: 35,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
  },
});
