<script setup>
import Cross from "@/components/icons/cross.vue";
import Clue from "@/components/icons/clue.vue";
import Inter from "@/components/icons/inter.vue";


import {onMounted, ref, shallowRef, watch} from "vue";
import Chat from "@/components/gysvue/chat.vue";


const items = shallowRef([{
  component:Clue,
  message:'信件',
},{
  component:Inter,
  message:'消息',
},
])

const emit = defineEmits(['change'])
const bool = ref(false)
const showModal = ref(false)



function bounce(name) {
  if (name === '消息') showModal.value = true
  if(name === '信件') {
    emit('change',true)
  }

}

</script>
<template>
  <div @mouseenter="bool = true" @mouseleave="bool = false">
  <div v-for="item in items" :key="item">
      <el-tooltip :content="item.message" placement="left" effect="light">
    <transition>
      <div v-if="bool"  class="svgBox" @click="()=>bounce(item.message)">
      <component :is="item.component"></component>
      </div>
    </transition>
      </el-tooltip>
  </div>
  <div :class="['svgBox',{active : bool}]">
  <cross></cross>
  </div>
  </div>
  <n-modal
      v-model:show="showModal"
      class="custom-card"
      preset="card"
      style="width: 90vh;padding: 3vh"
      title="附近用户"
      size="huge"
      :bordered="false"
      :closable="false"
  >
    <chat></chat>
  </n-modal>

</template>

<style scoped>


.v-enter-from,.v-leave-to{
  translate: 0 4vh;
  opacity: 0;
  scale: 1 1;
}
.v-enter-active,.v-leave-active{
  transition: all 0.5s;
}
.v-enter-to,.v-leave-fom{
  translate: 0 0;
  opacity: 1;
  scale: 1.2 1.2;
}
.svgBox{
  cursor: pointer;
  padding: 2vh;
  border-radius: 5vh;
  background-color: #D1AE7A;
  box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);
  margin: 2vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  z-index: 999;
}
.svgBox.active{
  transition: all 0.5s;
  transform: rotate(45deg) scale(1.2,1.2);
  z-index: 999;
}
.svgBox:hover{
  scale: 1.1 1.1;
  z-index: 999;
  transition: all 0.5s;
}
</style>