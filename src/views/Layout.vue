<script setup>
import { reactive } from "vue";
import layout_Geography from "../../src/assets/layout_Geography.jpg";
import layout_CB from "../../src/assets/layout_CB.jpg";
import layout_news from '../../src/assets/layout_news.jpg'

const data = reactive({
  items: [
    {
      name: "天使帝國-世界觀介紹",
      category: "平面排版",
      description:
        "使用現有的背景、人物和遊戲內的素材進行排版，製作粉絲專頁發文時使用的圖片。",
      img: layout_Geography,
    },
    {
      name: "天使帝國-CB封測公告",
      category: "平面排版",
      description: "使用現有素材調整色調與後製效果，用於粉絲專頁發文。",
      img: layout_CB,
    },
    {
      name: "天使帝國-參展小報",
      category: "平面排版",
      description: "發想並製作了動漫展宣傳用的小報，從內容的文案、排版到美術設計都是自己設計的。",
      img: layout_news,
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