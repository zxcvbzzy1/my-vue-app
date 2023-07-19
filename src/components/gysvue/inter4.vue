<script setup>

</script>
<template>
  <div class="imgBox" style="z-index: 1;" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
</template>

<style scoped>
.imgBox{
  position: absolute;
  top: 20%;
  /*transform: rotate(-9.92deg);*/
  right: -10%;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/PNG素材/人和猴.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.img-fluid{
  height: 80vh;
  z-index: 2;
}
</style>