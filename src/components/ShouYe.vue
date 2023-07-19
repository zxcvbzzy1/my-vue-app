<script>

</script>

<template>
<div class="imgBox"></div>
  <div class="imgBox1"></div>
  <div class="imgBox2"></div>
</template>
<style scoped>
.imgBox{
  position: absolute;
  top: 15%;
  transform: scale(1.5,1.5);
  /*transform: rotate(-9.92deg);*/
  left: 13%;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/PNG素材/寺庙.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.imgBox1{
  position: absolute;
  top: 80%;
  -moz-transform: matrix(-1, 0, 0, 1, 0, 0);
  -webkit-transform: matrix(-2, 0, 0, 2, 0, 0);
  -o-transform:matrix(-1.5,0,0,1.5,0,0);
  right: 40%;
  z-index: 0;
  width: 100%;
  height: 100vh;
  background-image: url("/PNG素材/花鸟.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.imgBox2{
  position: absolute;
  top: 60%;
  left: -15%;
  z-index: 0;
  width: 100%;
  height: 80vh;
  background-image: url("/PNG素材/亭子.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
</style>