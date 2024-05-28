

const toggleMenu = document.querySelector('.header_mobile-toggle-menu');
const menu = document.querySelector('.header__nav')
const main = document.querySelector('.main')
const footer = document.querySelector('.footer')
const header = document.querySelector('.header')
const buttonQuote = document.querySelector('.header__button');

toggleMenu.addEventListener('click', (e) => {
	toggleMenu.classList.toggle('open');
	menu.classList.toggle('open');
	header.classList.toggle('header--menu-open')
	if (main.style.display === 'none') {
    main.style.display = 'block';
    footer.style.display = 'block';
  } else {
    main.style.display = 'none';
    footer.style.display = 'none';
  }
	if (!menu.contains(buttonQuote)) {
    buttonQuote.style.display = 'block';
    menu.insertAdjacentElement('beforeend', buttonQuote);
  } 
})