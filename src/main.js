import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Swiper from 'swiper';
import 'swiper/css';

createApp(App).use(router).mount('#app')

const swiper = new Swiper(...);