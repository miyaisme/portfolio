<script setup>
import { reactive } from "vue";
import Pic_1 from '../../src/assets/logo_size400.jpg';

const data = reactive({
  items: [
    {
      name: 'toyota',
      description: "toyota的描述",
      img: Pic_1,
    },
    {
      name: 'toyota2',
      description: "toyota2的描述",
      img: Pic_1,
    }
  ]
})

</script>

<template>
  <Carousel :value="data.items" containerClass="100%">
    <template #item="slotProps">
      <div class="p-grid">
        <div class="align-content-center">
          <img :src="slotProps.data.img" alt="">
        </div>
        <!-- <div class="p-col-4">
          <h5>{{ slotProps.data.name }}</h5>
          {{ slotProps.data.description }}
        </div> -->
      </div>
    </template>
  </Carousel>
</template>

<style>
.content {
  min-height: 720px;
  background-color: #336959;
}
</style>

<script>
export default {
  data() {
    return {
      images: null,
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 5
        },
        {
          breakpoint: '768px',
          numVisible: 3
        },
        {
          breakpoint: '560px',
          numVisible: 1
        }
      ]
    }
  },
  galleriaService: null,
  
}
</script>