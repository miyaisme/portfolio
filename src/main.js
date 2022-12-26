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

import "primevue/resources/themes/vela-green/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faEnvelope)

const app = createApp(App)

app.use(router);
app.use(PrimeVue);
app.use(ToastService);

app.component('Button', Button);
app.component('InputText', InputText); 
app.component('Toast', Toast);
app.component('Galleria', Galleria);
app.component('Carousel', Carousel);
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app');