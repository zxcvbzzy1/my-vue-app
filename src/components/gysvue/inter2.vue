<script setup>

</script>
<template>
  <div>
<img src="/img/inter2.jpg" class="img-fluid" v-animate-onscroll.repeat="'animate__animated animate__bounceIn'">
  </div>
 <div class="imgBox" style="z-index: 1;" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
  <div class="imgBox" style="right: -50%;top: -20%;height: 100vh;" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
</template>

<style scoped>
.imgBox{
  position: absolute;
  top: 20%;
  /*transform: rotate(-9.92deg);*/
  right: -100%;
  z-index: 0;
  width: 100%;
  height: 70vh;
  background-image: url("/PNG素材/亭子.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.img-fluid{
  height: 80vh;
  z-index: 2;
}
</style>