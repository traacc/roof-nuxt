<template>
<section class="catalog catalog-page">
    <div class="container">
        <div class="inner">
            <div class="catalog-page__list">
                <catalog-card></catalog-card>
                <catalog-card></catalog-card>
                <catalog-card></catalog-card>
                <catalog-card></catalog-card>
                <catalog-card></catalog-card>
                <catalog-card></catalog-card>
            </div>

        </div>
    </div>
</section>
</template>
<script setup lang="ts">
definePageMeta({
  layout: 'simple-page'
});
const pageTitle = useState('pageTitle', () => 'Каталог');
</script>