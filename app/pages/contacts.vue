<template>
<section class="contacts-info">
    <div class="container">
        <div class="inner">
            <h2 class="section-title">Контактная <span class="red">информация</span></h2>
            <div class="contacts-info__list">
                <div class="contacts-info__item">
                    <div class="icon"><img src="~/assets/images/icon/phone_b.svg" alt=""></div>
                    <div class="value">+7 (000) 000-00-00</div>
                </div>
                <div class="contacts-info__item">
                    <div class="icon"><img src="~/assets/images/icon/email_b.svg" alt=""></div>
                    <div class="value">info@almait.ru</div>
                </div>
                <div class="contacts-info__item">
                    <div class="icon"><img src="~/assets/images/icon/geo_b.svg" alt=""></div>
                    <div class="value">г. Казань, ул Пушкина, д.1</div>
                </div>
            </div>
            <h2 class="section-title">Как <span class="red">проехать</span> к нам</h2>
            <div class="contacts-info__map">
                <img src="~/assets/images/contacts/map.png" alt="">
            </div>
        </div>
    </div>
</section>
<section class="feedback feedback--simple">
    <div class="container">
        <div class="inner">
            <div class="feedback__header">
                <h2 class="section-title">Заказать <span class="red">бесплатный</span> замер</h2>
                <div class="desc">Заполните форму и мы свяжемся с вами в течении 15 минут для консультации или оформления заявки на замер</div>

            </div>
        </div>
    </div>
    <div class="container container--wider">
        <div class="inner inner--main">
            <div class="feedback__main">
                <div class="feedback__row-main">
                    <div class="feedback__group">
                        <label for="" class="feedback__label">Введите ваше имя</label>
                        <input type="text" class="feedback__field" placeholder="Ваше имя">
                    </div>
                    <div class="feedback__group">
                        <label for="" class="feedback__label">Ваш номер телефона</label>
                        <input type="text" class="feedback__field" placeholder="Ваш номер телефона">
                    </div>
                    <div class="feedback__group">
                        <div class="dummy">&nbsp;</div>
                        <button class="btn">Отправить заявку</button>
                    </div>
                </div>
                <div class="feedback__row-privacy">
                    <img src="~/assets/images/icon/privacy.svg" alt="">
                    <div class="text">Ваши данные надежно защищены! Отправляя заявку вы соглашаетесь с условиями политики конфиденциальности и обработки персональных данных</div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'simple-page'
});
const pageTitle = useState('pageTitle', () => 'Контакты');
</script>