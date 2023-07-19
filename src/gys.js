import './assets/main.css'
import { createApp } from 'vue'
import Gys from './gys.vue'
import VWave from 'v-wave'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import VueKinesis from "vue-kinesis";
import naive from 'naive-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const gys =createApp(Gys)
gys.use(VueKinesis).use(ElementPlus).use(naive).use(VWave).use(VueAnimateOnScroll).mount('#gys')
