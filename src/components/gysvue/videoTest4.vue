<script setup>
import VTypical from 'vue-typical';
import {computed, onMounted, ref, watch} from "vue";
import {nextTick} from "vue";
import {ElMessageBox, ElNotification} from "element-plus";

const emit = defineEmits(['up','up2','up3'])
const props=defineProps({
  flag:{
    type:Boolean,
    default:false,
  },
})
const flag = computed(() => {
  return props.flag
})


const flag1 = ref(false)
const flag3 = ref(false)
const textSmallBox=ref(null)
const flag8 = ref(false)

const Arr = ref([{
  message:['在下列选项中，距离你所在位置最近的建筑中供奉的佛像是掌管什么的？',100,()=>{flag3.value = true}],
  flag:flag1,
},{
  message:[`A.财富`,100],
  flag:flag3,
},{
  message:[`B.姻缘`,100],
  flag:flag3,
},{
  message:[`C.子女`,100],
  flag:flag3,
},{
  message:[`D.学业`,100],
  flag:flag3,
},{
  message:['下一个序号线索将被填入你所选择的字母在信件中位置',100],
  flag:flag3,
}])


watch(Arr,()=>{
  nextTick(()=>{
    textSmallBox.value.scrollTop = textSmallBox.value.scrollHeight;
  })
}, { deep: true })

</script>

<template>
  <div class="textSmallBox" ref="textSmallBox">
    <el-card style="margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);  z-index: 2;">
      <v-typical
          :steps="['找到此刻距离你最近的拱形门洞—寺院内山门，穿过山门，再右转进入近圆形门洞，到达归元禅寺北院，找到如图所在位置。',100,()=>{
          flag1 = true
        }]"
          :loop="1"
          style="font-size: 16px;"
      ></v-typical>
    </el-card>

    <div v-for="item in Arr" :key="item">
      <transition>
        <div v-if="item.flag">
          <el-card style="margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
            <v-typical
                :steps=item.message
                :loop="1"
                style="font-size: 16px;"
            ></v-typical>
          </el-card>
        </div>
      </transition>
    </div>
  </div>
</template>

<style scoped>

/*noinspection CssInvalidPropertyValue*/
.textSmallBox{
  margin-top: -10vh;
  overflow: auto;
  height: 90vh;
  padding: 10vh 0 10vh 0;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0),#000,#000,#000,#000,#000, rgba(0, 0, 0, 0));
  -webkit-mask-size: 100% 100%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  z-index: 2;
}
.textSmallBox::-webkit-scrollbar {display:none}
.v-enter-from{
  opacity: 0;
  translate: -20px 0;
}
.v-enter-active{
  transition: all 1s ;
}
.v-enter-to{
  opacity: 1;
  translate: 0 0;
}



</style>