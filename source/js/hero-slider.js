// https://swiperjs.com/get-started#installation
import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function initHeroSlider () {
  const heroSwiper = new Swiper('.hero__swiper', {
    speed: 400,
    spaceBetween: 10,
    loop: true,
    autoHeight: true,
    modules: [Navigation, Pagination],

    pagination: {
      el: '.swiper-pagination',
      bulletClass: 'hero__pagination-btn',
      bulletActiveClass: 'hero__pagination-btn--active',
      clickable: true,
    },
  });
}

export { initHeroSlider };
