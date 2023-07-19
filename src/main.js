import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import VWave from 'v-wave'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import VueKinesis from "vue-kinesis";
import router from '@/router';




const app =createApp(App)
app.use(router).use(VueKinesis).use(VWave).use(VueAnimateOnScroll)
router.isReady().then(() => app.mount('#app'))