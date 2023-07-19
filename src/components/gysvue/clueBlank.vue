<script setup>
import { useDrag } from 'vue3-dnd'
import {computed, ref, toRef, toRefs, unref} from "vue";

const props=defineProps({
  clueText:String,
  clueTitle:String,
})
const emit = defineEmits(['correct','normal'])

const [collect, drag] = useDrag(() => ({
  type: 'Box',
  item: () => ({
    name: props.clueTitle,
  }),
  end: (item, monitor) => {
    const dropResult = monitor.getDropResult()
    if (item.name === dropResult?.name) {
      // emit('correct')
    }
    const n1 =dropResult?.fun()
    if(n1)
    n1.value = props.clueText

  },
  collect: monitor => ({
    isDragging: monitor.isDragging(),
  }),
}))


</script>
<template>

  <div :class="['clueTextBox', {dragging: collect.isDragging}]" :ref="drag">
    {{clueTitle}}:{{clueText}}
  </div>

</template>

<style scoped >
.clueTextBox{
  margin-top: 1vh;
  cursor: move;
  padding: 1vh 2vh;
  box-shadow: var(--el-box-shadow-lighter);
  border-radius: 1vh;
  z-index: 3;
  opacity: 1;
  border: 1px dashed grey;
}
.clueTextBox.dragging {
   opacity: 0.4;
 }
</style>