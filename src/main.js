import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import VWave from 'v-wave'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import VueKinesis from "vue-kinesis";




const app =createApp(App)
app.use(VueKinesis).use(VWave).use(VueAnimateOnScroll).mount('#app')
