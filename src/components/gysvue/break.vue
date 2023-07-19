<script setup>

</script>
<template>
  <div class="breakBox">
    <div class="breakSmallBox"></div>
    <div class="breakSmallBox1" ></div>
    <div class="breakSmallBox2" ></div>
    <div class="breakSmallBox3" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
    <div class="breakSmallBox4" ></div>
    <div class="breakSmallBox5" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
    <div class="breakSmallBox6" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
  </div>
</template>
<style scoped>
.breakSmallBox6{
  position: absolute;
  top: 270vh;
  transform: rotate(-9.92deg);
  right: -170vh;
  z-index: 4;
  width: 100%;
  height: 40vh;
  background-image: url("/PNG素材/石头 2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakSmallBox5{
  position: absolute;
  top: 250vh;
  transform: rotate(-9.92deg);
  right: -135vh;
  z-index: 4;
  width: 100%;
  height: 50vh;
  background-image: url("/PNG素材/兰花 一支.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakSmallBox4{
  position: absolute;
  top: 235vh;
  left: -20vh;
  z-index: 4;
  width: 100%;
  height: 60vh;
  background-image: url("/PNG素材/石头 2.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakSmallBox3{
  position: absolute;
  top: 240vh;
  right: -150vh;
  z-index: 4;
  width: 100%;
  height: 50vh;
  background-image: url("/PNG素材/兰花.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakSmallBox2{
  position: absolute;
  top: 240vh;
  left: -20vh;
  z-index: 5;
  width: 100%;
  height: 50vh;
  transform: rotate(48.41deg);
  background-image: url("/PNG素材/兰花 half.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakSmallBox1{
  position: absolute;
  top: 100vh;
  z-index: 4;
  width: 100%;
  height: 220vh;
  background-image: url("/PNG素材/寺庙 红色门.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakSmallBox{
  width: 100%;
  height: 220vh;
  background-image: url("/PNG素材/寺庙黄色门.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.breakBox{
  width: 100%;
  height: auto;
  background-image: url("/PNG素材/web.png");
  background-size: contain;
  background-origin: border-box;
  background-color: #D1AE7A;
}
</style>