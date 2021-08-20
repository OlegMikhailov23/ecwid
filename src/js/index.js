import 'normalize.css';
import '../sass/style.scss';

import Nav from "./components/nav";

document.addEventListener("DOMContentLoaded", () => {
    const nav = new Nav();
    nav.init();
});
