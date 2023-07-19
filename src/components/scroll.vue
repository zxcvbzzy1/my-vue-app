<script setup>
const props = defineProps({
  backcolor: String,
  length: String,
})

</script>

<template>

      <div class="box1"></div>

</template>

<style scoped>
.box1{
  width: v-bind(length);
  height: 3px;
  background-color: v-bind(backcolor);
}

</style>