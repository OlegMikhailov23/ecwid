import 'normalize.css';
import '../sass/style.scss';

import Nav from "./components/nav";
import Gallery from "./components/Gallery";

document.addEventListener("DOMContentLoaded", () => {
    const nav = new Nav();
    nav.init();
});
