<script setup>
import TitleText from "@/components/gysvue/titleText.vue";

const props = defineProps({
  headerText:{
    type:String,
  },
  textColor:{
    type:String,
    default:"rgb(255,255,255)",
  },
})

</script>
<template>
<div class="text1">
<transition appear name="title">
<title-text :header-text="headerText"></title-text>
</transition>
  <transition appear name="content">
    <div class="smallText">
    <slot name="text1"></slot>
    </div>
  </transition>
  <transition appear name="content1">
    <div class="smallText">
      <slot name="text2"></slot>
    </div>
  </transition>
</div>

</template>

<style scoped>
.text1{
  text-align: center;
}
.content-enter-from,.content1-enter-from{
  translate: 0 120%;
  opacity: 0;
}
.content-enter-active{
  transition: all 0.8s linear 0.5s;
}
.content-enter-to,.content1-enter-to{
  opacity: 1;
}
.content1-enter-active{
  transition: all 0.8s linear 0.8s;
}

.smallText{
  font-family: 'STZhongsong';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
  color: #5F5C5C;

}
.title-enter-from{
  opacity: 0.5;
  letter-spacing : 40px;
  transform: scale(1.3,1.3);
}
.title-enter-active{
  transition: all 1s linear;
}
.title-enter-to,.title-leave-from{
  opacity: 1;
  letter-spacing: 0;
  transform: scale(1,1);
}

</style>