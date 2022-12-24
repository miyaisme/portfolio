<template>
  <div id="nav">
    <div class="navbar-main">
      <router-link to="/graphic">平面設計</router-link>|
      <router-link to="/frontEnd">網頁前端</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div class="navbar-graphic">
      <router-link to="/graphic/layout">平面排版</router-link>
      <router-link to="/graphic/illustration">電腦繪圖</router-link>
    </div>
    <div class="navbar-front">
      <router-link to="/frontEnd/design">網頁設計</router-link>
      <router-link to="/frontEnd/program">前端程式</router-link>
    </div>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
