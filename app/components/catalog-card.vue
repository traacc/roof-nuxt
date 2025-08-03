<template>
    <div class="catalog-page__item">
        <div class="catalog-page__img">
            <div class="catalog-page__item-header">
                <h3 class="catalog-page__title">Профнастил HC35</h3>
                <div class="catalog-page__stock">В наличии</div>
            </div>
            <div class="catalog-page__item-gallery">
                
            <Galleria
                :value="images"
                :numVisible="5"
                :circular="true"
                :autoplayInterval="3000"
                style="max-width: 640px;"
                @item-change="onItemChange"
                :showThumbnails="false" 
                :showIndicators="true"
                    :pt="{
                    root: { style: 'border: none' },
                    content: { style: 'border: none' },
                    itemWrapper: { style: 'border: none' },
                    thumbnailWrapper: { style: 'border: none' }
                    }"
                >
                <template #item="{ item }">
                    <img :src="item.src" :alt="item" class="w-full h-auto" />
                </template>
            </Galleria>
            </div>
            
        </div>
        <div class="catalog-page__info">
            <div class="catalog-page__desc">Многоцелевой и практичный материал с одинаковым с обеих сторон профилем. Маркировка НС значит, что профлист является и «несущим», и «стеновым». </div>

            <div class="catalog-page__footer">
                <div class="catalog-page__price">от 555р/м²</div>
                <a href="#" class="catalog-page__btn-calc rBtn"><img src="~/assets/images/icon/enter-arrow.svg" alt=""></a>
            </div>
            
        </div>
    </div>
</template>
<script>
import Galleria from 'primevue/galleria';
import img1 from '~/assets/images/catalog/item_img_1.png';
import img2 from '~/assets/images/catalog/item_img_2.png';
import img3 from '~/assets/images/catalog/item_img_3.png';
import img4 from '~/assets/images/catalog/item_img_4.png';
import img5 from '~/assets/images/catalog/item_img_5.png';

export default {
  name: 'GalleriaExample',
  components: { Galleria },
  setup() {
    const images = ref([
      { src: img1, alt: 'Item 1' },
      { src: img2, alt: 'Item 2' },
      { src: img3, alt: 'Item 3' },
      { src: img4, alt: 'Item 4' },
      { src: img5, alt: 'Item 5' }
    ]);

    const onItemChange = (event) => {
      console.log('Displayed item index:', event.index);
    };

    return { images, onItemChange };
  }
};
</script>