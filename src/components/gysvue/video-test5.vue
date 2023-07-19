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
  message:['请在信件中与原作者姓名最后一个字的拼音首字母相同处，填写和他姓名字数对应的内容。',100,()=>{flag3.value = true}],
  flag:flag1,
},])


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
          :steps="['请进入大士阁，并找到作为“宗教画代表之作、归元寺镇寺之宝”的唐朝画迹。',100,()=>{
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