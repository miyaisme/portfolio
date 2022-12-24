<template>
  <div id="nav">
    <router-link class="logo-link" to="/">
      <div class="logo">
      <div class="logo-image">
        <img class="miyaLogo" src="../img/logo_size400.jpg" alt="">
      </div>
      <div class="logo-slogan">Miya's porfolio</div>
    </div>
    </router-link>
    <div class="navbar-main">
      <router-link class="navbar-sub" @mouseover="showSubGraphic" @mouseleave="closeSubGraphic" to="/graphic">平面設計
        <div class="navbar-graphic" :class="{ graphicIsShow }">
          <div class="graphic-items">
            <router-link class="graphic-item layout" to="/graphic/layout">平面排版</router-link>
          </div>
          <div class="graphic-items">
            <router-link class="graphic-item illustration" to="/graphic/illustration">電腦繪圖</router-link>
          </div>
        </div>
      </router-link>
       
      <router-link class="navbar-sub" @mouseover="showSubFront" @mouseleave="closeSubFront" to="/frontEnd">網頁前端
        <div class="navbar-front" :class="{ frontIsShow }">
          <div class="front-items">
             <router-link class="front-item design" to="/frontEnd/design">網頁設計</router-link>
          </div>
          <div class="front-items">
            <router-link class="front-item program" to="/frontEnd/program">前端程式</router-link>
          </div>
        </div>
      </router-link>
        
      <router-link class="navbar-sub" to="/about">About</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Prosto+One');
/* app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
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

.navbar-graphic, .navbar-front {
  position: absolute;
  top: 110px;
  display: none;
}

.graphicIsShow, .frontIsShow {
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 124px;
  height: 150px;
  background-color: white;
}


.graphic-items, .front-items {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.graphic-item, .front-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%; 
}

.graphic-item.layout, .front-item.design {
  border-bottom-style: dashed;
  border-color: #336959;
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
  width: 100px
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
      }
    }
  }
</script>