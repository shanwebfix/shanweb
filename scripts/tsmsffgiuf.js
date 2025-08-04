
function inittsmsffgiuf() {
const swiper = new Swiper(".testimonial-swiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
    },
  });
}