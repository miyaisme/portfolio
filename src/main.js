import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Galleria from 'primevue/galleria'
import Carousel from 'primevue/carousel'

import "primevue/resources/themes/saga-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";


const app = createApp(App)

app.use(router);
app.use(PrimeVue);
app.use(ToastService);
app.mount('#app');

app.component('Button', Button);
app.component('InputText', InputText); 
app.component('Toast', Toast);
app.component('Galleria', Galleria);
app.component('Carousel', Carousel);