<template>
  <div id="nav">
    <Navbar/>
  </div>
  <router-view />
  <Footer/>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Prosto+One");


/* app */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #336959;
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

.isFirstActive, .isSecondActive {
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
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';

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
  components: {
    Navbar,
    Footer
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