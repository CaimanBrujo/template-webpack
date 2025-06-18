import './style.css';
import logo from './assets/images/logo-js.svg';

const img = document.createElement('img');
img.src = logo;
img.alt = 'Logo';
img.width = 150;

document.body.appendChild(img);
