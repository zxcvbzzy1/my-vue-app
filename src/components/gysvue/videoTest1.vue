<script setup>
import VTypical from 'vue-typical';
import {computed, onMounted, ref, watch} from "vue";
import {nextTick} from "vue";
import {ElMessageBox} from "element-plus";

const imgArr = ref(['/img/v11.jpg','/img/v12.jpg','/img/v13.jpg','/img/v15.jpg','/img/v16.jpg'])
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
const flag = computed(() => {
  return props.flag
})
const flag2 = computed(() => {
  return props.flag2
})
const flag4 = computed(() => {
  return props.flag4
})

const flag1 = ref(false)
const flag3 = ref(false)
const textSmallBox=ref(null)
const flag5 = ref(false)
const flag6 = ref(false)
const flag7 = ref(false)
const flag8 = ref(false)
const flag9 = ref(false)
const open = () => {
  ElMessageBox.confirm(
      '空间在你面前扭曲，恍惚间你似乎又一次看见了一群面色苍白的人，强硬的游荡在街上……',
      '警告',
      {
        confirmButtonText: '怎么回事',
        cancelButtonText: '嗯？',
        type: 'warning',
        showClose:false,
        center: true,
      }
  )}

const Arr = ref([{
  message:['看看那时候的他们多有趣啊！呵呵..（没有温度的笑声）',500,()=>{flag8.value = true}],
  flag:flag,
},{
  message:['我：他们现在难道不有趣了吗？',500,()=>{flag9.value= true}],
  flag:flag8,
},{
  message:['...',500],
  flag:flag9,
},{
  message:['我：这是段难忘的旅途，他们看起来都很开心，不是吗？',500,()=>{flag3.value = true}],
  flag:flag2,
},{
  message:['——可他们都不记得了……一切都没有意义了',500],
  flag:flag3,
},{
  message:['我：也许这就是人生呢？在你所在地列车上，总会有人上车，也会有人下车',500,()=>{flag5.value=true}],
  flag:flag4,
},{
  message:['是啊…可如果是人类自己选择丢掉了这一切呢？',500,()=>{flag6.value=true}],
  flag:flag5,
},{
  message:['我：这是.....什么意思？',500,()=>{flag7.value=true}],
  flag:flag6,
},{
  message:['意思就是说，照片已经被恢复，你可以找到照片里的地方拍照，那是离开这儿的唯一方式。朋友，好好珍惜你所拥有的，无论是友情、亲情、爱情，还是一切与之有关的记忆，都不要随意丢弃',1000,()=>{open()},1000],
  flag:flag7,
},])


watch(Arr,()=>{
    nextTick(()=>{
      textSmallBox.value.scrollTop = textSmallBox.value.scrollHeight;
    })
}, { deep: true })

</script>

<template>
  <div class="textSmallBox" ref="textSmallBox">
  <el-card style="margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61); ">
    <v-typical
        :steps="['你想知道照片里是什么吗？那就找到下面的照片所显示的位置并且模仿照片的姿势拍照记录(僵硬的机械音)',500,()=>{
          flag1 = true
        }]"
        :loop="1"
        style="font-size: 16px;"
    ></v-typical>
  </el-card>
  <transition>
  <div v-show="flag1">
    <n-carousel
        direction="vertical"
        dot-placement="top"
        dot-type="line"
        show-arrow
        style="width: 100%; height: 60vh;margin-left: 1vh;margin-bottom: 1vh;"
        draggable
        :show-dots="false"
        mousewheel
        effect="card"
    >
  <img class="img-fluid" v-for="item in imgArr" :key="item" :src="item">
    </n-carousel>
  </div>
  </transition>
      <div v-for="item in Arr" :key="item">
        <transition>
        <div v-if="item.flag">
        <el-card style="margin-left: 1vh;margin-bottom: 1vh;width: auto;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
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
  height: 100vh;
  padding: 10vh 0 10vh 0;
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0),#000,#000,#000,#000,#000, rgba(0, 0, 0, 0));
  -webkit-mask-size: 100% 100%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
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