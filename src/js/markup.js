const markup = {
    createHeader() {
        return (
            `<header class="main-header">

    <div class="main-header__info">
        <a class="main-header__info__logo" href="#">
            <img src="assets/img/logo_header_2%201.svg" alt="logo">
        </a>

        <div class="main-header__info__list">
            <div class="main-header__info__list__item">
                <span>м. Кропоткинская</span>
                <span>Соймоновский проезд, д.7 с.1</span>
            </div>
            <div class="main-header__info__list__item">
                <div><span>Пн - Пт</span><span>11 - 20</span></div>
                <div><span>Сб - Вск</span><span>11 - 18</span></div>
            </div>
            <div class="main-header__info__list__item">
                <a href="tel:+78000000000">+7 800 000 00 00</a>
                <a href="tel:+78000000000">+7 800 000 00 00</a>
            </div>
        </div>
            <a class="main-header__info__bucket" href="#" title="Корзина">Корзина</a>
    </div>

    <div class="main-header__wrapper">
        <div class="modal-background"></div>
        <a class="nav-toggle" title="Open/Close menu">
            <span></span>
            <span></span>
            <span></span>
        </a>
        <nav>
            <ul class="main-header__menu-list">

                <li class="main-header__menu-list__item"><a class="main-header__menu-list__item__link"
                                                            href="#">Пряжа</a></li>

                <li class="pets-header__menu-list__item"><a class="pets-header__menu-list__item__link" href="#">Спицы</a></li>
                <li class="main-header__menu-list__item"><a class="main-header__menu-list__item__link"
                                                            href="#">Крючки</a></li>
                <li class="main-header__menu-list__item"><a class="main-header__menu-list__item__link"
                                                            href="#">Аксессуары</a></li>
                <li class="main-header__menu-list__item"><a class="main-header__menu-list__item__link"
                                                            href="#">Подарочные сертификаты</a></li>
                <li class="main-header__menu-list__item"><a class="main-header__menu-list__item__link"
                                                            href="#">МК и описания</a></li>
                <li class="main-header__menu-list__item"><a class="main-header__menu-list__item__link"
                                                            href="#">Модели</a></li>
            </ul>
        </nav>
    </div>

</header>`
        );
    },
    createGallery(items) {

        return (
            `<section class="carousel">
                <div class="carousel-wrapper">
                    <div class="carousel__slide">
                        <img src=${items[0]} id="lastClone" alt="">

                    </div>
                        <button class="carousel__control-btn carousel__control-btn-prev" id="prevBtn">Prev</button>
                        <button class="carousel__control-btn carousel__control-btn-next" id="nextBtn">Next</button>
                        
                        <div class="carousel__pagination-container">

                        </div>

                </div>
               </section>`
        )
    },

    createFirstClone(items) {
        return (
            `<img src=${items[items.length - 1]} id="firstClone" alt="">`
        )
    },

    createGalleryItem(item) {
        return (
            `<img src=${item} alt="${item}">`
        )
    },

    createGalleryPaginationBtn(idx) {
        return (
            `<button class="carousel__pagination-container__pagination-btn" id='btn${idx}' data="${idx}">${idx}</button>`
        )
    },

    createAdvantages() {
        return (
            `
            <section class="advantages">
    <div class="advantages-wrapper">
        <div class="advantages__item">
            <img src="assets/img/adv1.png" alt="">
            <span>
                Только натуральный состав
            </span>
        </div>
        <div class="advantages__item">
            <img src="assets/img/adv2.png" alt="">
            <span>
                Актуальное наличие на сайте
            </span>
        </div>
        <div class="advantages__item">
            <img src="assets/img/adv3.png" alt="">
            <span>
                Быстрая отправка
            </span>
        </div>
        <div class="advantages__item">
            <img src="assets/img/adv4.png" alt="">
            <span>
                Удобное расположение
            </span>
        </div>
        <div class="advantages__item">
            <img src="assets/img/adv5.png" alt="">
            <span>
                Помощь в подборе товаров
            </span>
        </div>
    </div>
</section>
            `
        )
    },

    createIntro() {
        return(
            `<section class="intro">
    <div class="intro-wrapper">
        <div class="intro__text">
            <h1>Добро пожаловать в наш новый магазин!</h1>
            <p>
                Мы садимся вязать, и вселенная вокруг начинает жить по-другому. Точнее, мы создаем собственную
                вселенную, в которой мы отдыхаем, вдохновляемся и создаем шедевры. Наш магазин за то, чтобы вы
                занимались своим любимым делом с удовольствием. Наш магазин – это место, где вам предложат пряжу и
                инструмент исключительного качества для создания лучших творений, которые вы только задумали. Наш
                магазин – это место, куда вы просто можете прийти поболтать и выпить чашечку кофе за вязанием
            </p>
            <a href="#">Узнать о нас больше</a>
        </div>
        <div class="intro__video-container">
            <div class="intro__video-content">
                    <div class="intro__video-content__btn"></div>
            </div>
        </div>
    </div>
</section>`
        )
    }

};

export default markup;
