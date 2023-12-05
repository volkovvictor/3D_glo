import timer from './modules/timer';
import menu from './modules/menu';
import popup from './modules/popup';
import scroll from './modules/scroll';
import validation from './modules/validation';
import tabs from './modules/tabs';
import slider from './modules/slider';

timer('2023.12.02');
menu();
popup();
scroll();
validation();
tabs();
slider('.portfolio-content', '.portfolio-item', '.portfolio-dots', 'portfolio-item-active', 'dot-active');