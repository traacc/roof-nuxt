<template>
    <div class="catalog-main__item">
    <div class="catalog-main__img">
        <div class="catalog-main__item-header">
            <h3 class="catalog-main__title">Профнастил HC35</h3>
            <div class="catalog-main__stock">В наличии</div>
        </div>
        <div class="catalog-main__item-gallery">
            
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
    <div class="catalog-main__info">
        <div class="catalog-main__desc">Многоцелевой и практичный материал с одинаковым с обеих сторон профилем. Маркировка НС значит, что профлист является и «несущим», и «стеновым». </div>
        <div class="catalog-main__attribs">
            <div class="catalog-main__attrib">
                <div class="label">Толщина (мм):</div>
                <div class="value"><span>0,35</span><span>0,40</span><span>0,45</span><span>0,50</span></div>
            </div>
            <div class="catalog-main__attrib">
                <div class="label">Ширина полная:</div>
                <div class="value">1113 мм</div>
            </div>
            <div class="catalog-main__attrib">
                <div class="label">Ширина рабочая:</div>
                <div class="value">1200 мм</div>
            </div>
        </div>
        <div class="catalog-main__footer">
            <div class="catalog-main__price">от 555р/м²</div>
            <button class="catalog-main__btn-calc btn">Рассчитать заказ</button>
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