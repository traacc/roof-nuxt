<template>
    <div class="header-wrapper">
        <header class="header">
            <div class="container">
                <div class="inner">
                    <div class="header__left">
                        <div class="header__logo"><a href="~/"><img src="~/assets/images/header/logo.svg" alt=""></a></div>
                        <nav class="header__nav">
                            <a href="#" class="nav__item">Заборы</a>
                            <a href="catalog" class="nav__item">Каталог</a>
                            <a href="about" class="nav__item">О компании</a>
                            <a href="contacts" class="nav__item">Контакты</a>
                        </nav>
                    </div>
                    <div class="header__right">
                        <div class="header__call-time">
                            <div class="icon">
                                <img src="~/assets/images/header/wa.svg" alt="">
                            </div>
                            <div class="text">
                                Среднее время ответа 15 минут
                            </div>
                        </div>
                        <div class="header__phone">
                            <div class="header__phone-info">
                                Ежедневно <span class="value">С 9:00 до 19:00</span>
                            </div>
                            <div class="header__phone-num">
                                +7 (996) 336 51-24
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="hero hero-main">
            <div class="container">
                <div class="inner">
                    <div class="hero__left">
                        <div class="hero__content">
                            <h2 class="hero__title">Профнастил от производителя в наличии с доставкой в день заказа по лучшей стоимости</h2>
                            <button class="btn hero__btn">Заказать бесплатный замер</button>
                        </div>
                        <div class="hero__advs">
                            <div class="hero__adv">
                                <img src="~/assets/images/hero/hero_adv_1.svg" alt="">
                                <div class="text">Возможность доставки в день обращения</div>
                            </div>
                            <div class="hero__adv">
                                <img src="~/assets/images/hero/hero_adv_2.svg" alt="">
                                <div class="text">Бесплатный замер без дополнительных условий</div>
                            </div>
                            <div class="hero__adv">
                                <img src="~/assets/images/hero/hero_adv_3.svg" alt="">
                                <div class="text">Гарантия самой выгодной стоимости</div>
                            </div>
                        </div>

                    </div>
                    <div class="hero__right">
                        <div class="hero__categories">
                            <a href="" class="item active">Профнастил</a>
                            <a href="" class="item">Металлочерепица</a>
                            <a href="" class="item">Металлосайдинг</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <slot />
    <footer class="footer">
        <div class="container">
            <div class="inner">
                <div class="footer__top">
                    <div class="footer__logo">
                        <img src="~/assets/images/header/logo.svg" alt="">
                        <div class="footer__copyright">Все для кровли и монтаж<br />almait.ru ® 2025</div>
                    </div>
                    <div class="footer__nav">
                            <a href="#" class="nav__item">Заборы</a>
                            <a href="catalog" class="nav__item">Каталог</a>
                            <a href="about" class="nav__item">О компании</a>
                            <a href="contacts" class="nav__item">Контакты</a>
                    </div>
                    <div class="footer__contacts">
                        <div class="footer__phone">
                            <div class="footer__phone-info">
                                Ежедневно <span class="value">С 9:00 до 19:00</span>
                            </div>
                            <div class="footer__phone-num">
                                +7 (996) 336 51-24
                            </div>
                        </div>
                        <div class="footer_email">
                            <div class="footer__email-info">
                                Ежедневно <span class="value">круглосуточно</span>
                            </div>
                            <div class="footer__email-num">
                                info@altait.ru
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer__bottom">
                    <div class="footer__privacy"><a href="#">Политика конфиденциальности</a></div>
                    <div class="footer__info">ИП: Ахмадуллин Сабит Рустэмович<br />ИНН: 165711225795 </div>
                    <div class="footer__dev-logo"><img src="~/assets/images/header/dev_logo.svg" alt=""></div>
                </div>
            </div>
        </div>
    </footer>
</template>