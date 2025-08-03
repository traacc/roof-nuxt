<template>
    <div class="header-wrapper header-wrapper--simple">
        <header class="header">
            <div class="container">
                <div class="inner">
                    <div class="header__left">
                        <div class="header__logo"><a href="/"><img src="~/assets/images/header/logo.svg" alt=""></a></div>
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
        <div class="hero hero-simple">
            <div class="container">
                <div class="inner">
                    <div class="hero__left">
                        <div class="hero__content">
                            <div class="hero__breadcrumbs">
                                <a href="/" class="breadcrumbs-item">Главная</a>
                                <a href="#" class="breadcrumbs-item">{{ pageTitle }}</a>
                            </div>
                            <h2 class="hero__title">{{ pageTitle }}</h2>
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

<script setup>
const pageTitle = useState('pageTitle')
</script>