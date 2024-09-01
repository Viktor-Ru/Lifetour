
const btnElement = document.querySelector('.main-header__menu-togle');
const altBtnElement = document.querySelector('.main-header__menu-togle > span');
const menuElement = document.querySelector('.main-nav');
const listElement = document.querySelector('.main-nav__list');
const pageBodyElement = document.querySelector('.page-body');


function togleMenu() {

  function MenuOpen() {
    menuElement.classList.remove('main-nav--close');
    btnElement.classList.add('main-header__menu-togle--open');
    pageBodyElement.classList.add('page-body--no-scrol');

    altBtnElement.innerHTML = 'закрыть меню.';

    listElement.addEventListener('click', handleClickMenuItem);
  }

  function MenuClose() {
    menuElement.classList.add('main-nav--close');
    btnElement.classList.remove('main-header__menu-togle--open');
    pageBodyElement.classList.remove('page-body--no-scrol');

    altBtnElement.innerHTML = 'открыть меню.';

    listElement.removeEventListener('click', handleClickMenuItem);
  }


  function handleClickTogler() {
    if (menuElement.classList.contains('main-nav--close')) {
      MenuOpen();
    } else {
      MenuClose();
    }
  }

  function handleClickMenuItem(evt) {
    if (evt.target.classList.contains('main-nav__link')) {
      MenuClose();
    }
  }

  btnElement.addEventListener('click', handleClickTogler);
}

export { togleMenu };
