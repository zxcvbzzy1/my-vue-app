<script setup>
import {onMounted, onUnmounted, ref} from 'vue'
import Scroll from "@/components/scroll.vue";
const props = defineProps({
  currentTab: {
    type:String,
    default:'首页',
  },
  currentTab1: {
    type:String,
    default:'首页',
  },
})

const items = ref([
  {message: '首页'},{message: '旅游项目'},{message: '产品介绍'},{message: '用户参与创作平台'},{message: '关于我们'}
])


</script>

<template>
  <nav class="navbar navbar-light" style="justify-content: flex-end;">
    <div class="nav justify-content-end">
      <a v-for="item in items" :key="item" :href="'#'+item.message">

    <div
        style=" color: white;font-size: 20px;font-weight: 700;"
        v-wave="{
  color: '#AF8E5B',
  initialOpacity: 0.5,
  duration: 0.5,
  easing: 'ease-in',
}"  :class="['nav-item tab-div', { active: currentTab === item.message }]" @click='currentTab = item.message' @mouseenter="currentTab1= item.message;"  @mouseleave="currentTab1 = ''">
    {{item.message}}
      <Transition>
        <Scroll v-if="currentTab1 === item.message || currentTab === item.message" backcolor="#AF8E5B" length="100%"></Scroll>
      </Transition>
    </div>
      </a>
    </div>
  </nav>
</template>


<style scoped>
nav{
  z-index: 99;
  position: -webkit-sticky;
  position: sticky;
  top: 10px;
  margin-right: 70px;

}

.tab-div{
  padding: 7px 0;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
  margin-right:50px;
  font-weight: 200;
  font-family: lxgw-r;
  overflow: hidden;
}
.tab-div.active{
  /*border-bottom-width: 4px;*/
  /*-webkit-border-bottom-left-radius: 3px;*/
  /*-webkit-border-bottom-right-radius: 3px;*/
  /*border-bottom-style: solid;*/
  /*border-bottom-color: aquamarine;*/
  /*background-color: rgba(47, 46, 46, 0.8);*/
}
.v-enter-from{
  width: 0;
}
.v-enter-active{
  transition: all 0.5s cubic-bezier(1,.14,.37,.89);
}
.v-enter-to,.v-leave-from{
  width: 100%;
}
.v-leave-active{
  transition: all 0.8s cubic-bezier(.34,1.03,.75,.97);
}
.v-leave-to{
  position: absolute;
  margin-left: 100px;
  width: 0;
}
a{
  text-decoration: none;
}
</style>