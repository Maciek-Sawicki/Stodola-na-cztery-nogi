
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


//SCROLL LOCK
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
  const navLinks = document.querySelectorAll(".nav-wrapper li");

  const menuFunction = () => {
    nav.classList.toggle("nav-active");
    navImg.classList.toggle("nav-img-active");
    burger.classList.toggle("toggle");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${
          index / 7 + 0.2
        }s`;
      }
    });
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

  navLinks.forEach((link) => {
    link.addEventListener("click", menuFunction);
    link.addEventListener("click", scrollFix);
  });
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

//FORM VALIDATION
const username = document.getElementById('name');
const nameText = document.getElementById('name-text');
const email = document.getElementById('email');
const emailText = document.getElementById('email-text');
const message = document.getElementById('message');
const messageText = document.getElementById('message-text');
const form = document.getElementById('form');



form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
  
  
})

function checkInputs() {
  const emailValue = email.value.trim();


  if (username.value === '' || username.value == null) {
    username.classList.remove("success");
    username.classList.add("error");
    nameText.classList.add("error-text");
  }
  else {
    nameText.classList.remove("error-text");
    username.classList.add("success");
  }

  if (message.value === '' || message.value == null) {
    message.classList.remove("success");
    message.classList.add("error");
    messageText.classList.add("error-text");
  }
  else {
    messageText.classList.remove("error-text");
    message.classList.add("success");
  }

  if (emailValue === '' || emailValue == null) {
    email.classList.add("error");
    emailText.classList.add("error-text")
  } else if (!isEmail(emailValue)) {
    email.classList.add("error");
    emailText.classList.add("error-text")
  }
  else {
    emailText.classList.remove("error-text");
    email.classList.add("success");
  }
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}