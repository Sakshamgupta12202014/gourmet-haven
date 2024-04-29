
  var swiper = new Swiper(".swiper", {
    speed:600,
    loop: true,
    autoplay: {
      delay: 5000, // Autoplay delay in milliseconds
    },
    pagination: {
      el: ".swiper-pagination", // Pagination container
      clickable: true, // Enable clickable pagination bullets
    },
  });


/* Gallery slider*/ 

  new Swiper('.gallery-slider', {
    speed: 4000,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
