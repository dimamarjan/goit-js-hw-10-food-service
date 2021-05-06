import dishCardTpl from './templates/dish-cards.hbs';
import dishesItems from './menu.json';
import themeSwitcher from './theme-switcher';
import './styles.css';

const menuItems = document.querySelector('ul.js-menu');

menuItems.insertAdjacentHTML('beforeend', dishCardTpl(dishesItems));
