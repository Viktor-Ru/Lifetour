function initMainMenu() {
  const menuBtn = document.querySelector('.header__nav-toggle');
  const descriptionBtn = document.querySelector('.header__nav-toggle-description');
  const menuElement = document.querySelector('.main-nav');
  const menulinks = document.querySelectorAll('.main-nav__link');
  const body = document.querySelector('.page-body');


  function toggleMenu() {
    body.classList.toggle('page-body--no-scrol');
    menuElement.classList.toggle('main-nav--open');
    menuBtn.classList.toggle('header__nav-toggle--open');

    if (menuBtn.className === 'header__nav-toggle header__nav-toggle--open') {
      descriptionBtn.textContent = 'закрыть меню.';
      menulinks.forEach((i) => {
        i.addEventListener('click', toggleMenu);
      });

    } else {
      descriptionBtn.textContent = 'открыть меню.';
      menulinks.forEach((i) => {
        i.removeEventListener('click', toggleMenu);
      });
    }
  }

  menuBtn.addEventListener('click', toggleMenu);
}

export { initMainMenu };
