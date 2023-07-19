<script setup>
import {ref, watch} from "vue";
import Up from "@/components/icons/up.vue";

const emit = defineEmits(['up','up2','up3'])
const text = ref(' ')
const text1 = ref('13% 70%')
const count = ref(1)
watch(count,()=>{
  if (count.value === 2){
    text.value='0 80%, 25% 20%'
  }
  if (count.value === 3){
    text.value='0 80%, 25% 20%, 50% 80%'
  }
  if (count.value === 4){
    text.value='0 80%, 25% 20%, 50% 80%, 75% 20%, 100% 80%'
    emit('up')
  }
  if (count.value === 5){
    text1.value='20% 70%'
    emit('up2')
  }
  if (count.value === 6){
    text1.value='20% 100%'
    emit('up3')
  }
})

</script>
<template>
    <el-tooltip content="上传照片" placement="top" effect="light" :show-arrow="false">
  <div class="svgBox" @click="()=>{count++}">
      <up></up>
  </div>
    </el-tooltip>
<div class="thumb1" v-animate-onscroll.repeat="'thumb'" >
  <img src="/img/img2.jpg" class="img-fluid">
</div>
</template>
<!--suppress CssInvalidPropertyValue -->
<style scoped>
.thumb1{
  opacity: 0.5;
  transition: all 1s;
  -webkit-mask-image: linear-gradient(to bottom, #000, #000),
  linear-gradient(to bottom, #000, transparent),
  linear-gradient(to bottom, transparent, #000),
  linear-gradient(to bottom, #000, transparent),
  linear-gradient(to bottom, transparent, #000);
  -webkit-mask-size: 10% 70%;
  -webkit-mask-position: 25% -220%, 75% -220%;
  -webkit-mask-repeat: no-repeat;
}
/*linear-gradient(to bottom, #000, #000),*/
/*linear-gradient(to bottom, #000, #000),*/
/*linear-gradient(to bottom, #000, #000),*/
/*linear-gradient(to bottom, #000, #000),*/
/*linear-gradient(to bottom, #000, #000);*/
.thumb1.thumb {
  opacity: 0.8;
  transition: all 1s;
  -webkit-mask-image: linear-gradient(to bottom, #000, #000,transparent),
  linear-gradient(to bottom, #000, #000, transparent),
  linear-gradient(to bottom, #000, #000,  transparent),
  linear-gradient(to bottom, #000, #000, transparent),
  linear-gradient(to bottom, #000, #000, transparent);
  -webkit-mask-size: v-bind(text1);
  -webkit-mask-position: v-bind(text);
  -webkit-mask-repeat: no-repeat;
}
.svgBox{
  padding: 2vh;
  border-radius: 5vh;
  width: auto;
  z-index: 99;
  background-color: #D1AE7A;
  box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);
  position: absolute;
  transition: all 0.5s;
}
.svgBox:hover{
  transition: all 0.5s;
  cursor: pointer;
  transform: scale(1.1, 1.1);
}
</style>