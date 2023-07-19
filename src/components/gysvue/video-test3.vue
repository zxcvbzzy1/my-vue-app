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
  message:['如果你看到上述建筑，恭喜你成功到达归元禅寺外山门。',100,()=>{flag3.value = true}],
  flag:flag1,
},{
  message:[`请点击你目前所在位置的图片，以解锁下一个线索`,100],
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
    <el-card style="margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61); ">
      <v-typical
          :steps="['仿古式朱红殿门嵌在明黄色墙壁里，呈三开门式样，中间一大拱门，左右各一小拱门。',100,()=>{
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
    <transition>
    <div v-if="flag">
    <el-card style="margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
      <v-typical
          :steps="['归元寺原为民间寺院，十九世纪末清光绪皇帝敕赐“归元禅寺”四字匾额以及《龙藏》一部，升格成为皇家寺院。请找出悬于壁上，蓝底鎏金，能体现“皇家寺院”地位的物品。该物品上字数对应的序号可以划去。',100]"
          :loop="1"
          style="font-size: 16px;"
      ></v-typical>
    </el-card>
  </div>
    </transition>
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
}
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
.textSmallBox::-webkit-scrollbar {display:none}


</style>