<script setup>
import MainBoxText from "@/components/MainBoxText.vue";
import {handleError, nextTick, onMounted, onUnmounted, ref} from "vue";


const props = defineProps({
  textColor: String,
  length: String,
})
const items = ref([
  {
    header: '归元禅寺篇',
    text:'一封被错过多年的回信，早已随岁月模糊的字迹，揭开了尘封多年的故事，也把爷爷困在了无望的时光里...',
    post:{
      textColor: 'rgb(65,132,152)',
      imgSrc:'./img/3.png',
      aHref:'./gysGame.html'
    },
  },
  {
    header: '222',
    text:'11asdasd111',
    post:{
      textColor: 'rgb(65,132,152)',
      margin:'0 0 0 40%',
      afterMargin:'20% 0 0 25%',
      imgSrc:'./img/5.jpg',
      left:'-20%',
      backColor:'rgb(13,49,65)',
      rotateDeg:'rotate(90deg)',
      transLateX:10,
    },
  },
  {
    header: '33',
    text:'asdasd111111',
    post:{
      textColor: 'rgb(65,132,152)',
      imgSrc:'./img/6.jpg',
    },
  },
])
const curHeader = ref()
const box1 =ref(null)
const itemRefs = ref([])


function useScroll(ref){
const Bool=ref('false')
function m1 () {

  let client=document.documentElement.clientHeight;
  function scrollSit(item){
    let top=item.getBoundingClientRect().top;
    let bottom=client-top;
    if(top>=-20 && bottom>=0) return true;
    return false;
  }
  if(scrollSit(ref)){
        Bool.value=true
  }

}
onMounted(() => window.addEventListener('scroll', m1))
onUnmounted(() => window.removeEventListener('scroll', m1))

  return Bool
}

</script>

<template>




  <MainBoxText v-bind="item.post" v-for="item in items" :key="item.header" >
    <template v-slot:header>{{item.header}}</template>
    <template v-slot:text>{{item.text}}</template>
  </MainBoxText>

<!--    <MainBoxText v-bind="post[1]">-->
<!--      <template v-slot:header>{{ bool }}</template>-->
<!--      <template v-slot:text>asdadasdadsads</template>-->
<!--    </MainBoxText>-->

<!--    <MainBoxText v-bind="post[0]">-->
<!--      <template v-slot:header>1111</template>-->
<!--      <template v-slot:text>asdadasdadsads</template>-->
<!--    </MainBoxText>-->


</template>

<style>
.bigBox{

}

</style>