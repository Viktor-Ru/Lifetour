// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function initHeroSlider() {
  const heroSwiper = new Swiper('.hero__swiper', {
    speed: 400,
    loop: true,
    autoHeight: true,
    modules: [Pagination],

    pagination: {
      el: '.hero__swiper-pagination',
      bulletClass: 'hero__pagination-btn',
      bulletActiveClass: 'hero__pagination-btn--active',
      clickable: true,
    },
  });
}

function initToursSlider() {
  const toursSwiper = new Swiper('.tours__swiper', {
    speed: 400,
    spaceBetween: 10,
    loop: false,
    autoHeight: true,
    slidesPerView: 1,
    modules: [Navigation],

    navigation: {
      prevEl: '.tours__button--prev',
      nextEl: '.tours__button--next',
      disabledClass: 'nav-button--disadled',
    },

    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 18,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  });
}

// function initTrainingSlider() {
//   const trainingSwiper = new Swiper('.training__swiper', {
//     speed: 400,
//     spaceBetween: 10,
//     loop: false,
//     autoHeight: true,
//     slidesPerView: 1,
//     modules: [Navigation],

//     navigation: {
//       prevEl: '.training__button-prev',
//       nextEl: '.training__button-next',
//       disabledClass: 'nav-button--disadled',
//     },

//     breakpoints: {
//       768: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       1440: {
//         slidesPerView: 4,
//         spaceBetween: 20,
//       }
//     }
//   });
// }

export { initHeroSlider, initToursSlider };
