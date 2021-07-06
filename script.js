var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navImg = document.querySelector(".nav-img");

  const menuFunction = () => {
    nav.classList.toggle("nav-active");
    navImg.classList.toggle("nav-img-active");
    burger.classList.toggle("toggle");
  };

  burger.addEventListener("click", menuFunction);
};

navSlide();


document.addEventListener("DOMContentLoaded", function () {

  el_autohide = document.querySelector('.autohide');
  if (el_autohide) {
      var last_scroll_top = 0;
      window.addEventListener('scroll', function () {
          let scroll_top = window.scrollY;
          if (scroll_top < last_scroll_top) {
              el_autohide.classList.remove('scrolled-down');
              el_autohide.classList.add('scrolled-up');
          }
          else {
              el_autohide.classList.remove('scrolled-up');
              el_autohide.classList.add('scrolled-down');
          }
          last_scroll_top = scroll_top;
      });
      // window.addEventListener
  }
  // if
});

const faqs = document.querySelectorAll(".faq-container");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})