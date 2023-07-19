<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import  "animate.css"
import HeaderNav from "@/components/headerNav.vue";
import MainBox from "@/components/MainBox.vue";
import ShouYe from "@/components/ShouYe.vue";
import {onMounted, onUnmounted, ref} from "vue";
import UserCreate from "@/components/userCreate.vue"

const current = ref('首页')
const item1 =ref(null)
const item2 =ref(null)
const item3 =ref(null)
const item4 =ref(null)
const Bool =ref (false)
function m1 () {

  let client=document.documentElement.clientHeight;
  function scrollSit(item){
    let top=item.getBoundingClientRect().top;
    let bottom=client-top;
    if(bottom>=0) return true;
    return false;
  }
  if(scrollSit(item1.value)){
    current.value = '首页'
  }
  if(scrollSit(item2.value)){
    current.value = '产品介绍'
  }
  if(scrollSit(item3.value)){
    current.value = '关于我们'
  }
  if(scrollSit(item4.value)){
    current.value = '用户参与创作平台'
  }
  if(window.pageYOffset <= 200){
    Bool.value = false
  }
  else {
    Bool.value =true
  }

}
onMounted(() => window.addEventListener('scroll', m1))
onUnmounted(() => window.removeEventListener('scroll', m1))






</script>

<template>
<div class="bigBigBox">

  <div>
    <transition name="nav">
    <header-nav v-if="Bool" :current-tab="current" :current-tab1="current"></header-nav>
    </transition>
  <div class="container container1" id="首页" ref="item1">
    <ShouYe></ShouYe>

  </div>
  <main class="container" id="产品介绍" ref="item2">
    <MainBox></MainBox>
<!--    <TheWelcome />-->
  </main>
    <div class="container1" id="用户参与创作平台" ref="item4">
      <user-create></user-create>

    </div>


  <footer id="关于我们" ref="item3">

  </footer>
  </div>
</div>
</template>

<style scoped>
.bigBigBox{
  background-image: url("/PNG素材/web.jpg");
  background-size: contain;
  background-origin: border-box;
}
.nav-enter-from,.nav-leave-to{
  opacity: 0;
  transform: translateY(-50px);
}
.nav-enter-active{
  transition: all 0.8s cubic-bezier(.58,.23,.73,.5);
}
.nav-leave-active{
  transition: all 0.8s cubic-bezier(.23,.91,.4,.9);
}
.container1 {
  width: 100%;
  height: 140vh;
  line-height: 1.5;
}
footer{
  height: 400px;
  width: 100%;
  background-image: url("/PNG素材/web.jpg");
  background-size: cover;
  background-origin: border-box;
}



</style>
