<script setup>
import {ref, watch} from "vue";
import {ElNotification} from "element-plus";

const emit = defineEmits(['up','up2','up3'])
const props=defineProps({
  flag:{
    type:Boolean,
    default:false,
  },
  flag2:{
    type:Boolean,
    default:false,
  },
  flag4:{
    type:Boolean,
    default:false,
  },

})

const errorText=ref('缝')
const flagText = ref(false)
const flagText2 = ref(false)
const flagText3 = ref(false)
const flagText4 = ref(false)
const flagText5 = ref(false)
const count = ref(0)
const open = ()=>{

}

watch(count,()=>{
  if(count.value === 4){

  }
})
</script>
<template>
<transition>
  <div v-if="flag" class="box">
    <el-card shadow="hover" style="color: #FFF5E3;padding:1vh 3vh;background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
      <template #header>
        <div class="card-header">
          <span><b>半月吞虚</b></span>
        </div>
      </template>
      <div class="text">
      <p>扉前半月汨鸿蒙，织女牛郎水底<span :class="{error: flagText}" @click="()=>{errorText = '逢';
        if(!flagText) open();
        emit('up')
        flagText = true;}">{{errorText}}</span>。</p>
      <p>至理无言先圣意，真机绝唱祖师风。</p>
      <p>货开宇宙舒新眼，浸澜虚空显旧容。</p>
      <p>彻底掀翻无别意，灵源点滴尽朝宗。</p>
      </div>
    </el-card>
  </div>

</transition>
<transition>
  <div v-if="flag2" class="box">
    <el-card shadow="hover" style="color: #FFF5E3;padding:1vh 3vh;background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
      <template #header>
        <div class="card-header">
          <span><b>优昙并献</b></span>
        </div>
      </template>
      <div class="text">
        <p>寺前有<span :class="{error: flagText2}" @click="()=>{if(!flagText2)emit('up2');flagText2 = true}">荷花</span>二<span :class="{error: flagText3}" @click="()=>{if(!flagText3)emit('up2');flagText3 = true;}" >塘</span>，熏风拂拂，得清<span :class="{error: flagText4}" @click="()=>{if(!flagText4)emit('up2');flagText4 = true;}">僧室</span>。</p>
        <p>招提大别异诸方，面有芙蕖双放光。</p>
        <p>滚滚红尘难点缀，清风<span :class="{error: flagText5}" @click="()=>{if(!flagText5)emit('up2');flagText5 = true;}">满院</span>递幽香。</p>
      </div>
    </el-card>
  </div>
</transition>
  <div class="imgBox" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
</template>

<style scoped>
.imgBox{
  position: absolute;
  top: -13%;
  /*transform: rotate(-9.92deg);*/
  right: -40%;
  z-index: 0;
  width: 100%;
  height: 70vh;
  background-image: url("/PNG素材/双人.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.error{
  font-size: 3vh;
  font-weight: 600;
  color: brown;
  transition: all 0.5s;
}
.text{
  padding: 0 6vh;
  cursor: pointer;
  font-size: 2vh;
}
.card-header{
  font-size: 4vh;
}
.box{
  margin-bottom: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
}
.v-enter-from{
  opacity: 0;
  translate: 0 -20px;
}
.v-enter-active{
  transition: all 1s ;
}
.v-enter-to{
  opacity: 1;
  translate: 0 0;
}
</style>