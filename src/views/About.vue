<template>
  <div class="about">
    <div
      class="image"
      style="height: 150px; width: 150px; overflow: hidden; border-radius: 50%"
    >
      <img
        src="../assets/photo.jpg"
        alt=""
        class="photo"
        style="width: 100%; object-fit: contain"
      />
    </div>
    <div class="text">
      <h3 class="text-item">葉琳雅 | Miya.Yeh</h3>
      <span
        class="text-item"
        style="
          background-color: white;
          border: solid 1px white;
          width: 90%;
          margin-bottom: 8px;
        "
      ></span>
      <p class="text-item">喜歡唱歌、喜歡畫圖，喜歡動手做東西，例如寫寫程式之類的。</p>
    </div>
  </div>
</template>

<style>
.about {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2em;
  margin-bottom: 2em;
  height: 100%;
  max-width: 720px;
  margin: 0 auto;
}

.imgate {
  width: 55%;
}

.text {
  width: 35%;
  color: white;
  display: flex;
  flex-wrap: wrap;
}

.text-item {
  width: 100%;
}
</style>
