const markupHeader = {
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
    }
};

export default {markupHeader};
