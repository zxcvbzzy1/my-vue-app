<template>
  <div class="demo-progress">
    <el-progress type="circle" :percentage="percentage" :color="colors" />
<!--    <el-progress type="dashboard" :percentage="percentage2" :color="colors" />-->
<!--    <div>-->
<!--      <el-button-group>-->
<!--        <el-button :icon="Minus" @click="decrease" />-->
<!--        <el-button :icon="Plus" @click="increase" />-->
<!--      </el-button-group>-->
<!--    </div>-->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const percentage = ref(0)


const colors = [
  { color: '#f56c6c', percentage: 20 },
  { color: '#e6a23c', percentage: 40 },
  { color: '#5cb87a', percentage: 60 },
  { color: '#1989fa', percentage: 80 },
  { color: '#6f7ad3', percentage: 100 },
]

const increase = () => {
  percentage.value += 10
  if (percentage.value > 100) {
    percentage.value = 100
  }
}
const decrease = () => {
  percentage.value -= 10
  if (percentage.value < 0) {
    percentage.value = 0
  }
}
</script>
<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
.demo-progress .el-progress--circle {
  margin-right: 15px;
}
</style>
