<script setup>
import { reactive } from "vue";
import protfolioDesign from '../../src/assets/ProtfolioDesign_figma.png'
import wireframe from '../../src/assets/wireframe.png'


const data = reactive({
  items: [
    {
      name: "Protfolio",
      category: "網頁設計",
      description: "使用Figma製作的本網站的設計圖，考量RWD原則對應電腦版和手機板兩種版型。",
      img: protfolioDesign,
    },
    {
      name: "電商網站-wireframe架構",
      category: "網頁設計",
      description: "電商網站的wireframe架構規劃，考量RWD原則設計手機板版型。",
      img: wireframe,
    },
  ],
});
</script>

<template>
  <div class="carousel">
    <Carousel :value="data.items" containerClass="100%" :circular="true" style="
  color: white;
  padding: 1.5em 0;
  max-width: 80%;
">
      <template #item="slotProps">
        <div class="content">
          <div class="picture" style="min-height: 330px; max-height: 650px;">
            <img :src="slotProps.data.img" alt="" style="height: 100%; width: 100%; object-fit: contain;" />
          </div>
          <div class="text">
            <h5 class="text-item">{{ slotProps.data.category }}</h5>
            <h2 class="text-item">{{ slotProps.data.name }}</h2>
            <span class="text-item" style="
          background-color: white;
          border: solid 1px white;
          width: 90%;
          margin-bottom: 8px;
        "></span>
            <p style="width: 90%">{{ slotProps.data.description }}</p>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<style>
.carousel {
  display: flex;
  justify-content: center;
}

.content {
  display: flex;
  justify-content: space-between;
  padding: 0 2em;
  margin-bottom: 2em;
  height: 100%;
}

.picture {
  width: 55%;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center
}

.text {
  width: 35%;
  padding: 1em 0;
  display: flex;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  text-align: right;
}

.text-item {
  width: 100%;
}
</style>

<script>
export default {
  data() {
    return {
      images: null,
      responsiveOptions: [
        {
          breakpoint: "1024px",
          numVisible: 5,
        },
        {
          breakpoint: "768px",
          numVisible: 3,
        },
        {
          breakpoint: "560px",
          numVisible: 1,
        },
      ],
    };
  },
  galleriaService: null,
};
</script>