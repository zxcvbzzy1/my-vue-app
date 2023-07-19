<script setup>
import { useDrop } from 'vue3-dnd'
import TypeIt from 'typeit'
import {onMounted, ref, watch} from "vue";

const props=defineProps({
  name:String,
  text:{
    default:'',
  },
  id:String,
  text1:String,

})
const n1= ref('')
const [collect, drop] = useDrop(() => ({
  accept: 'Box',
  drop: () => ({ name: props.name,
      fun: ()=>{
    return n1
      }
  }),
  collect: monitor => ({
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
}))

// const backgroundColor = computed(() =>
//     unref(isActive) ? 'darkgreen' : unref(canDrop) ? 'darkkhaki' : '#222'
// )
watch(
    n1,() => {
      new (TypeIt)(`#${props.id}`, {
        strings: n1.value,
        speed: 20,

        lifeLike:true,
        waitUntilVisible:true,
        startDelay:100,
        nextStringDelay: [500,200],
        breakLines: false,
      }).go()
    }
)
onMounted(() => {
  new (TypeIt)(`#${props.id}`, {
    strings: '',
    speed: 20,

    lifeLike:true,
    startDelay:100,
    nextStringDelay: [500,200],
    waitUntilVisible:true,
    breakLines: false,
  }).go()
})

</script>
<template>
  <div class="textBox" :ref="drop">
    <div :id="id">{{text1}}</div>
  </div>
</template>
<style scoped>
.textBox{
  display: inline-block;
  padding: 1vh 2vh;
  min-width: 20px;
  border-radius: 1vh;
  border: 1px dashed grey;
}

</style>