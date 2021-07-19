
var mySwiper = new Swiper('.swiper-homepage', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >=  1024px
    1024: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  },
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  a11y: {
    enabled: false
  }
})

var mySwiper = new Swiper('.swiper-single', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  a11y: {
    enabled: false
  }
})



var mySwiper = new Swiper('.swiper-hero-carousel', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

  a11y: {
    enabled: false
  }
})


//try this effect
var swiper = new Swiper(".hero-coverflow", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});