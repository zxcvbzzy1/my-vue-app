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
  flag2:{
    type:Number,
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


const flag1 = ref(false)
const flag3 = ref(false)
const textSmallBox=ref(null)
const flag8 = ref(false)

const Arr = ref([{
  message:['找到《半月吞虚》拓碑，其中有一个错别字',100,()=>{flag8.value = true}],
  flag:flag1,
},{
  message:['该字在它所在的半句诗句中的排位即序号线索。',500],
  flag:flag,
},{
  message:['找到《优昙并献》拓碑，分析其中描绘的景致(点击相应的字块)，离开北院，找到寺院中与之描述相似景致所在的位置。',500,()=>{emit('up2');flag3.value=true}],
  flag:flag,
}])
const open = ()=>{

}

watch(Arr,()=>{
  nextTick(()=>{
    textSmallBox.value.scrollTop = textSmallBox.value.scrollHeight;
  })
}, { deep: true })
watch(flag2,()=>{
  if (flag2.value === 0)
    open()
})
</script>

<template>
  <div class="textSmallBox" ref="textSmallBox">
    <el-card style="margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61); ">
      <v-typical
          :steps="['出大士阁向左走，你会看到一座高约25米的楼阁式建筑，呈两侧五开间，供奉由缅甸赠与的释迦牟尼坐像。请走到与它相对的文化长廊。',100,()=>{
          emit('up')
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
      <div v-if="flag3">

    <el-card style="font-size: 16px;margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
      可点击景致还剩{{flag2}}处
    </el-card>
      </div>
    </transition>
    <transition>
      <div v-if="flag2 === 0">

        <el-card style="font-size: 16px;margin-left: 1vh;margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);">
          你当前所在院落中有两处以乐器命名的建筑，且在院落两头遥相呼应。请选择其中一栋建筑名称填入E位置，使信件内容合理顺畅。
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