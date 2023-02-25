const mySwiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  slidesPerView: 2,
  keyboardControl: true,
  spaceBetween: 20,
  allowTouchMove: true,
  autoplay: {
    delay: 7000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    
    // when window width is >= 640px
    760: {
      slidesPerView: 2,
      spaceBetween: 20
    }
  }
  
});

