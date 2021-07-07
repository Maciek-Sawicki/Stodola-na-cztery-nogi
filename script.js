
// HERO SECTION SWIPER
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

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; } 
  }));
} catch(e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}



// NAVIGATION
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-wrapper");
  const navImg = document.querySelector(".nav-img");

  const menuFunction = () => {
    nav.classList.toggle("nav-active");
    navImg.classList.toggle("nav-img-active");
    burger.classList.toggle("toggle");
  };

  const scrollFix = () => {
    if (burger.classList.contains("toggle")) {
      disableScroll();
    }
    else {
      enableScroll();
    }
  }

  burger.addEventListener("click", menuFunction);
  burger.addEventListener("click", scrollFix);
};

navSlide();

// AUTOHIDE HEADER NAVIGATION
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


// FAQS CONTAINERS

const faqs = document.querySelectorAll(".faq-container");

faqs.forEach(faq => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("active");
  })
})

// FACEBOOK CHATBOX MESSENGER

var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "107580524920161");
        chatbox.setAttribute("attribution", "biz_inbox");

        window.fbAsyncInit = function () {
            FB.init({
                xfbml: true,
                version: 'v11.0'
            });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/pl_PL/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));