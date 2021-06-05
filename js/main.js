//Menu Functionality
const menuButton = document.querySelector('.header__mobile-menu__button');
const menuButtonImage = menuButton.querySelector('img');
const menuBlock = document.querySelector('.header__menu');
const menuLinks = document.querySelectorAll('.header__menu__link');

function showMenu() {
  menuBlock.classList.remove('header__menu__hidden');
  menuButtonImage.src = 'images/icon-close.svg';
  menuButton.setAttribute('aria-expanded', 'true');
}
function hideMenu() {
  menuBlock.classList.add('header__menu__hidden');
  menuButtonImage.src = 'images/icon-hamburger.svg';
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  if (menuBlock.classList.contains('header__menu__hidden')) {
    showMenu();
  } else {
    hideMenu();
  }
});

document.addEventListener('keyup', (e) => {
  if (!menuBlock.classList.contains('header__menu__hidden') && e.key === 'Escape') {
    hideMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('focusout', (event) => {
    if (event.relatedTarget.classList.contains('header__menu__link')) {
      return;
    } else {
      hideMenu();
    }
  });
});
