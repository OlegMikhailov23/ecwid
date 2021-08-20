import render from "../helper.render";
import markup from "../markup";
class Nav {
    constructor() {
        this.hamburgerButton = null;
        this.navMenu = null;
        this.modalBackground = null;
        this.navMenuLink = null;
    }

    setElements () {
        this.hamburgerButton = document.querySelector('.nav-toggle');
        this.navMenu = document.querySelector('nav');
        this.modalBackground = document.querySelector('.modal-background');
        this.navMenuLink = document.querySelectorAll('nav a');
    }

    closeNav() {
        this.navMenu.classList.add('closed');
        document.querySelector('html').style.overflow = 'visible';
        setTimeout(() => {
            this.navMenu.classList.remove('collapse');
            this.navMenu.classList.remove('closed');
            this.hamburgerButton.classList.remove('open');
            this.modalBackground.classList.remove('modal-background-show');
        }, 199)
    }

    closeNavHandler (el) {
        el.forEach((link) => {
            link.addEventListener('click', () => {
                this.closeNav();
            })
        });
    }

    init() {
        const container = document.querySelector('body');
        render(container, markup.markupHeader.createHeader());
        this.setElements();

        this.closeNavHandler(this.navMenuLink);

        this.hamburgerButton.addEventListener('click', (evt) => {
            if (this.navMenu.classList.contains('collapse')) {
                this.closeNav();
            } else {
                this.hamburgerButton.classList.add('open');
                this.navMenu.classList.add('collapse');
                this.modalBackground.classList.add('modal-background-show');
                document.querySelector('html').style.overflow = 'hidden';
            }
        })

        this.modalBackground.addEventListener('click', () => {
            this.closeNav()
        });
    }
}

export default Nav;
