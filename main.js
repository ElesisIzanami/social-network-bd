import './style.css'

import { navigateTo } from "./public/src/lib/router";


const defaultRoute = '/';

window.onpopstate = () => {         //se activa cuando hay un cambio de estado explicito o simplemente nos vamos atras y delante
    navigateTo(window.location.pathname);
};

navigateTo(window.location.pathname || defaultRoute);