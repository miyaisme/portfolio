<template>
    <router-link class="logo-link" to="/">
      <div class="logo">
        <div class="logo-image">
          <img class="miyaLogo" src="../assets/logo_size400.jpg" alt="" />
        </div>
        <div class="logo-slogan">Miya's porfolio</div>
      </div>
    </router-link>
    <div class="navbar-main">
      <router-link class="navbar-sub" @mouseover="showSubGraphic" @mouseleave="closeSubGraphic" to="/graphic">平面設計
        <div class="navbar-graphic" :class="{ graphicIsShow }">
          <div class="graphic-items" @mouseover="changeFirstColor" @mouseleave="returnFirstColor">
            <router-link class="graphic-item layout" :class="{ isFirstActive }" to="/graphic/layout">平面排版</router-link>
          </div>
          <div class="graphic-items" @mouseover="changeSecondColor" @mouseleave="returnSecondColor">
            <router-link class="graphic-item illustration" :class="{ isSecondActive }"
              to="/graphic/illustration">電腦繪圖</router-link>
          </div>
        </div>
      </router-link>

      <router-link class="navbar-sub" @mouseover="showSubFront" @mouseleave="closeSubFront" to="/frontEnd">網頁前端
        <div class="navbar-front" :class="{ frontIsShow }">
          <div class="front-items" @mouseover="changeFirstColor" @mouseleave="returnFirstColor">
            <router-link class="front-item design first-element" :class="{ isFirstActive }" @mouseover="changeColor"
              @mouseleave="returnColor" to="/frontEnd/design">網頁設計</router-link>
          </div>
          <div class="front-items" @mouseover="changeSecondColor" @mouseleave="returnSecondColor">
            <router-link class="front-item program second-element" :class="{ isSecondActive }" @mouseover="changeColor"
              @mouseleave="returnColor" to="/frontEnd/program">前端程式</router-link>
          </div>
        </div>
      </router-link>

      <router-link class="navbar-sub" to="/about">About</router-link>
    </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Prosto+One");

/* navbar */
#nav {
  display: flex;
  justify-content: space-between;
  height: 140px;
  padding: 0 5em;
  background-color: white;
}

#nav a {
  font-weight: bold;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #336959;
}

.navbar-main {
  display: flex;
  align-items: center;
}

.navbar-sub {
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: 1.5em;
}

.navbar-graphic,
.navbar-front {
  position: absolute;
  top: 110px;
  display: none;
}

.graphicIsShow,
.frontIsShow {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 124px;
  height: 150px;
  background-color: white;
  z-index: 1;
}

.graphic-items,
.front-items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.graphic-item,
.front-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.graphic-item.layout,
.front-item.design {
  border-bottom-style: dashed;
  border-color: #336959;
}

.isFirstActive,
.isSecondActive {
  color: #42b983;
}

/* navbar logo */
.logo-link {
  display: flex;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.miyaLogo {
  height: 100px;
  width: 100px;
}

.logo-slogan {
  font-family: Prosto One;
  font-size: 24px;
  letter-spacing: 1px;
}
</style>

<script>
export default {
  data() {
    return {
      graphicIsShow: false,
      frontIsShow: false,
      firstElement: false,
      secondElement: false,
      isFirstActive: false,
      isSecondActive: false,
    };
  },
  methods: {
    showSubGraphic() {
      this.graphicIsShow = true;
    },
    showSubFront() {
      this.frontIsShow = true;
    },
    closeSubGraphic() {
      this.graphicIsShow = false;
    },
    closeSubFront() {
      this.frontIsShow = false;
    },
    changeFirstColor() {
      this.isFirstActive = true;
    },
    returnFirstColor() {
      this.isFirstActive = false;
    },
    changeSecondColor() {
      this.isSecondActive = true;
    },
    returnSecondColor() {
      this.isSecondActive = false;
    },
  },
};
</script>