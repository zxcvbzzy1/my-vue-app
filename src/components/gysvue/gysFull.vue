<script setup>
import Return from "@/components/icons/return.vue";

</script>
<template>
<div class="full">
  <div class="return">
    <n-popover trigger="hover" placement="right" :show-arrow="false">
      <template #trigger>
        <a href="./index.html">
          <return></return>
        </a>
      </template>
      <span>返回</span>
    </n-popover>
  </div>
  <div class="door1">
    <img class="img-fluid" src="/PNG素材/寺庙黄色门.png" >
  </div>
</div>
</template>
<style scoped>
.full{
  width: 100%;
  height: 200vh;
  background-color: rgb(231, 219, 204) ;
}
.return:hover{
  top: 1vh;
  transition: all 0.5s;
}
.return{
  position: absolute;
  left: 2vh;
  top: 2vh;
  transition: all 0.5s;
}
.img-fluid{
  margin-top: -1vh;
}
.door1{
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  max-width: 100%;
  height: auto;
}
</style>