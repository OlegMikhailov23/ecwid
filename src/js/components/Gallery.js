import render from "../helper.render";
import markup from "../markup";

const galleryItems = ['assets/img/Rectangle%2016.jpg',
                      'assets/img/Rectangle%2016.jpg',
                      'assets/img/Rectangle%2016.jpg',
                      'assets/img/Rectangle%2016.jpg'];

class Gallery {
    constructor() {
        this.items = galleryItems;
        this.counter = 1;
        this.carouselSlide = null;
        this.size = null;
    }

    turnPageHandler(el) {
        el.forEach((btn) => {
            btn.addEventListener('click', (evt) => {
                document.querySelectorAll('.carousel__pagination-container__pagination-btn').forEach((btn => {
                    btn.classList.remove('btn-active');
                }))
                evt.target.classList.add('btn-active');
                this.carouselSlide.style.transition = `transform 0.4s ease-in-out`;
                this.counter = Number(evt.target.getAttribute('data'));
                this.carouselSlide.style.transform = `translateX(` + (-this.size * this.counter) + `px)`;
            })
        });
    }

    setElements() {
        this.carouselSlide = document.querySelector('.carousel__slide');
    }

    init() {
        const container = document.querySelector('body');
        render(container, markup.createGallery(this.items));
        this.setElements();

        const paginationContainer = document.querySelector('.carousel__pagination-container');

        for (let i = 0; i < this.items.length; i += 1) {
            render(this.carouselSlide, markup.createGalleryItem(this.items[i]));
            render(paginationContainer, markup.createGalleryPaginationBtn(i + 1))
        }

        render(this.carouselSlide, markup.createFirstClone(this.items));

        this.turnPageHandler(document.querySelectorAll('.carousel__pagination-container__pagination-btn'));

        const carouselImages = document.querySelectorAll('.carousel__slide img');
        const prevBtn = document.querySelector('#prevBtn');
        const nextBtn = document.querySelector('#nextBtn');


        this.size = this.carouselSlide.clientWidth;

        this.carouselSlide.style.transform = `translateX(` + (-this.size * this.counter) + `px)`;


        nextBtn.addEventListener('click', () => {
            document.querySelectorAll('.carousel__pagination-container__pagination-btn').forEach((btn => {
                btn.classList.remove('btn-active');
            }))
            if (this.counter === carouselImages.length - 1) return;
            this.carouselSlide.style.transition = `transform 0.4s ease-in-out`;
            this.counter += 1;
            if (document.getElementById(`btn${this?.counter}`)) {
                document.getElementById(`btn${this.counter}`).classList.add('btn-active');
            }
            this.carouselSlide.style.transform = `translateX(` + (-this.size * this.counter) + `px)`;
        })

        prevBtn.addEventListener('click', () => {
            document.querySelectorAll('.carousel__pagination-container__pagination-btn').forEach((btn => {
                btn.classList.remove('btn-active');
            }))
            if (this.counter <= 0) return;
            document.getElementById(`btn${this?.counter}`).classList.add('btn-active');
            this.carouselSlide.style.transition = `transform 0.4s ease-in-out`;
            this.counter -= 1;
            this.carouselSlide.style.transform = `translateX(` + (-this.size * this.counter) + `px)`;
        })

        this.carouselSlide.addEventListener('transitionend', () => {
            if (carouselImages[this.counter].id === 'lastClone') {
                this.carouselSlide.style.transition = 'none';
                this.counter = carouselImages.length - 2;
                this.carouselSlide.style.transform = `translateX(` + (-this.size * this.counter) + `px)`;
            }

            if (carouselImages[this.counter].id === 'firstClone') {
                this.carouselSlide.style.transition = 'none';
                this.counter = carouselImages.length - this.counter;
                this.carouselSlide.style.transform = `translateX(` + (-this.size * this.counter) + `px)`;
            }
        })
    }
}

export default Gallery;
