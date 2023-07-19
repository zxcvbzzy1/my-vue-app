import './assets/main.css'
import { createApp } from 'vue'
import Gys from './gys.vue'
import VWave from 'v-wave'
import VueAnimateOnScroll from 'vue3-animate-onscroll'
import VueKinesis from "vue-kinesis";
import naive from 'naive-ui'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from "@/router";


const gys =createApp(Gys)
gys.use(router).use(VueKinesis).use(ElementPlus).use(naive).use(VWave).use(VueAnimateOnScroll)

router.isReady().then(() => gys.mount('#gys'))
