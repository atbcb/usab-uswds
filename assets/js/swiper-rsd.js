var homepageSwiper = new Swiper('.swiper-homepage', {
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
    el: '.swiper-homepage .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-homepage .swiper-button-next',
    prevEl: '.swiper-homepage .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-homepage .swiper-scrollbar',
  },

  a11y: {
    enabled: true
  }
})

var singleSwiper = new Swiper('.swiper-single', {
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
    el: '.swiper-single .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-single .swiper-button-next',
    prevEl: '.swiper-single .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-single .swiper-scrollbar',
  },

  a11y: {
    enabled: true
  }
})

var heroSwiper = new Swiper('.swiper-hero-carousel', {
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
    el: '.swiper-hero-carousel .swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-hero-carousel .swiper-button-next',
    prevEl: '.swiper-hero-carousel .swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-hero-carousel .swiper-scrollbar',
  },

  a11y: {
    enabled: true
  }
})

//try this effect
var coverflowSwiper = new Swiper(".hero-coverflow", {
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
    el: ".hero-coverflow .swiper-pagination",
  },
});