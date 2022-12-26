<script setup>
import { reactive } from "vue";
import layout_Geography from "../../src/assets/layout_Geography.jpg";
import layout_CB from "../../src/assets/layout_CB.jpg";
import layout_news from '../../src/assets/layout_news.jpg'
import illust_longManga from '../../src/assets/illust_longManga.png'
import illust_oneframe from '../../src/assets/illust_oneframe.jpg'
import illust_cy from '../../src/assets/illust_cy.jpg'
import illust_halloween from '../../src/assets/illust_halloween.jpg'
import illust_hana from '../../src/assets/illust_hana.jpg'

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
    {
      name: "天使帝國-長條漫畫",
      category: "電腦繪圖",
      description: "利用遊戲現有的素材加工，繪製成宣傳用的長條漫畫。",
      img: illust_longManga,
    },
    {
      name: "天使帝國-一格漫畫",
      category: "電腦繪圖",
      description: "繪製粉專宣傳用的單格漫畫。",
      img: illust_oneframe,
    },
    {
      name: "Cygnus",
      category: "電腦繪圖",
      description: "半厚塗風格，利用亮度對比集中視線。",
      img: illust_cy,
    },
    {
      name: "角色設計-萬聖節",
      category: "電腦繪圖",
      description: "賽璐璐風格上色的日系角色設計。",
      img: illust_halloween,
    },
    {
      name: "hana",
      category: "電腦繪圖",
      description: "希望表現頭巾的透明感和皮膚的彩度變化，做出日常光下微微發亮的效果。",
      img: illust_hana,
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