import 'normalize.css';
import '../sass/style.scss';

import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Features from "./components/Features";
import Intro from "./components/Intro";

document.addEventListener("DOMContentLoaded", () => {
    const nav = new Header();
    const gallery = new Gallery();
    const advantages = new Features();
    const intro = new Intro();

    nav.init();
    gallery.init();
    advantages.init();
    intro.init();
});
