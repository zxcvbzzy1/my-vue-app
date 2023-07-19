<script setup>

const correct = 1
const emit = defineEmits(['up'])
const items = [{
  imgSrc:'/img/inter1.jpg',
  title:1,
},{
  imgSrc:'/img/inter2.jpg',
  title:2,
},{
  imgSrc:'/img/inter3.jpg',
  title:3,
},{
  imgSrc:'/img/inter4.jpg',
  title:4,
}]


</script>
<template>
<div class="row">
  <transition-group appear>
  <div v-for="item in items" :key="item" class="col-lg-5" @click="()=>{if(item.title === correct) emit('up',true)}">
    <img :src="item.imgSrc" class="img-fluid" v-animate-onscroll.repeat="'animate__animated animate__bounceIn'">
  </div>
  </transition-group>
</div>

  <div class="imgBox" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'">
  </div>
</template>
<style scoped>

.imgBox{
  position: absolute;
  top: 10%;
  /*transform: rotate(-9.92deg);*/
  right: -95%;
  z-index: 4;
  width: 100%;
  height: 60vh;
  background-image: url("/PNG素材/山1.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.col-lg-5{
  margin-left: 2vh;
  margin-bottom: 2vh;
  cursor: pointer;
}

</style>