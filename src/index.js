import dishCardTpl from './templates/dish-cards.hbs';
import dishesItems from './menu.json';
import './styles.css';

const menuItems = document.querySelector('ul.js-menu');
menuItems.insertAdjacentHTML('beforeend', dishCardTpl(dishesItems));
