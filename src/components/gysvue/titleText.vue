<script setup>
const props = defineProps({
  headerText:{
    type:String,
  },
  textColor:{
    type:String,
    default:'rgb(255,255,255)'
  }
})

</script>
<template>
  <div class="textBox">
    {{headerText}}
  </div>
</template>

<style scoped>

.textBox{

  font-family: 'STZhongsong';
  font-style: normal;
  font-weight: 400;
  font-size: 148px;
  line-height: 196px;

  color: #5F5C5C;

}
</style>