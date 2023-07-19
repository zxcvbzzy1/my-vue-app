<script setup>
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import  "animate.css"
import TitleAnimate from "@/components/gysvue/titleAnimate.vue";
import Arrow from "@/components/icons/arrow.vue";
import {onMounted, onUnmounted, shallowRef, ref} from "vue";
import FullScrollBox from "@/components/gysvue/fullScrollBox.vue";
import SideNav from "@/components/gysvue/sideNav.vue";
import GysFull from "@/components/gysvue/gysFull.vue";
import Return from "@/components/icons/return.vue";
import ClueBlank from "@/components/gysvue/clueBlank.vue";
import { DndProvider } from 'vue3-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Blank from "@/components/gysvue/blank.vue";
import ProgressNav from "@/components/gysvue/progressNav.vue";
import Break from "@/components/gysvue/break.vue";




const Bool =ref (true)
const fullBigBox=ref(null)
const arrow =ref(null)
function m1 () {
  if(window.pageYOffset !== 0){
    Bool.value = false
  }
  else {
    Bool.value =true
  }
}
function animate ({duration,draw,timing,bo}) {
  let start=performance.now();
  requestAnimationFrame(
      function n1(){
        let progress;
        if (bo)
        {progress=(performance.now()-start)/duration;
          if (progress>1) progress=1;}
        else {progress=(performance.now()-start)/duration;
          if (progress>=1) {start=performance.now();progress=0;}}
        let z=timing(progress);
        draw(z);
        if (progress<1) requestAnimationFrame(n1);
      }
  )
}
function scroll_top(eve,time,dur,num){
  let toTop=eve.getBoundingClientRect().top-num;
  if(toTop<=10 && toTop>=-10) return;
  let totalTop=document.documentElement.scrollTop;
  function draw(z){
    document.documentElement.scrollTop=+totalTop+toTop*z;

  }
  if(time===0) time=function(progress){return +progress}
  animate({
    duration:dur,
    timing:time,
    draw:draw,
    bo:true,
  });
}
onMounted(() => {
  arrow.value.addEventListener('click', ()=>scroll_top(fullBigBox.value,0,600,0))
  window.addEventListener('scroll', m1)
})
onUnmounted(() => window.removeEventListener('scroll', m1))
const active = ref(false)
const contents = ref([{clueText:'每日下午5点至次日上午7点是宵禁', clueTitle:'线索一', bool:true,},{clueText:'他们制定和颁布了律令', clueTitle:'线索二', bool:true,},{clueText:'但我理解你', clueTitle:'线索三', bool:true,},
  {clueText:'我本以为你应当是和我心意相通的', clueTitle:'线索六', bool:true,},{clueText:'枪声、尖叫和孩童的哭泣让我几欲发狂', clueTitle:'线索五', bool:true,},{clueText:'到处都是喝彩的声音', clueTitle:'线索六', bool:true,},{clueText:'在这乱世里，总当有英雄的青年儿女还世界一个海清河晏', clueTitle:'线索七', bool:true,},
  {clueText:'我永远不会原谅你', clueTitle:'线索八', bool:true,},{clueText:'我在这里等你回来娶我', clueTitle:'线索九', bool:true,},{clueText:'时钟被拨快了一小时', clueTitle:'线索十', bool:true,},{clueText:'你这一去延安', clueTitle:'线索十一', bool:true,},
  {clueText:'在归元禅寺分手之日，你的决绝和背弃让我心碎', clueTitle:'线索十二', bool:true,},
])
const textString = ref('')

</script>
<template>
  <n-drawer
      v-model:show="active"
      :default-width="502"
      :default-height="600"
      placement="top"
      display-directive="show"
      resizable
      style="min-height: 50vh;
        max-height: 85vh;
        background-color: #E0D1BA;
     "
  >
    <n-drawer-content >

      <div class="mail">
      </div>

      <div class="text">
        &emsp;&emsp;&emsp;建明，<DndProvider :backend="HTML5Backend"><blank :name="'线索一'" :id="'name1'" :text1="'A'" /></DndProvider>。直到从你父亲那里得知真相，我才恍然，我不能接受你竟隐瞒我至如斯地步。
        我本以为无论遇到什么，我们都能彼此信任、同舟共济，没想到这个念头如此快速的夭折。<DndProvider :backend="HTML5Backend"><blank :name="'线索二'" :id="'name2'" :text1="'B'"/></DndProvider>。<DndProvider :backend="HTML5Backend"><blank :name="'线索三'" :id="'name3'" :text1="'C'"/></DndProvider>。
        他们已经进入武汉的那一天，<DndProvider :backend="HTML5Backend"><blank :name="'线索四'" :id="'name4'" :text1="'D'"/></DndProvider>。江汉关<DndProvider :backend="HTML5Backend"><blank :name="'线索五'" :id="'name5'" :text1="'E'"/></DndProvider>的<DndProvider :backend="HTML5Backend"><blank :name="'线索六'" :id="'name6'" :text1="'F'"/></DndProvider>，真稀奇，原来这在各地竟还不一
        样<DndProvider :backend="HTML5Backend"><blank :name="'线索七'" :id="'name7'" :text1="'G'"/></DndProvider>，凡违反都将受到严酷的处罚。生活在他们的统治下，短短一月时间，我已经忘记原来的生活作何滋味了。
        <DndProvider :backend="HTML5Backend"><blank :name="'线索八'" :id="'name8'" :text1="'H'"/></DndProvider>，不知何时才能回来。保重自己，<DndProvider :backend="HTML5Backend"><blank :name="'线索九'" :id="'name9'" :text1="'I'"/></DndProvider>。等到那时，你可不能因为所谓的害怕耽误再拒绝了。
      </div>
      <div class="progress-nav">
        <progress-nav></progress-nav>
      </div>
      <!--      线索传入块-->
      <div class="clueArrBox">
        <h4>已解锁线索：</h4>
        <div class="row">
          <div v-for="(content, index) in contents" :key="index" class="col-lg-3 col-sm-4">
            <DndProvider :backend="HTML5Backend">
              <clue-blank :clue-text="content.clueText" :clue-title="content.clueTitle" @correct=" textString=content.clueText" ></clue-blank>
            </DndProvider>
          </div>
        </div>
      </div>
    </n-drawer-content>
  </n-drawer>
  <div class="full">
    <div class="return">
      <n-popover trigger="hover" placement="right" :show-arrow="false">
        <template #trigger>
          <a href="#" onclick="window.history.back()">
            <return></return>
          </a>
        </template>
        <span>返回</span>
      </n-popover>
    </div>
    <div class="textTitleBox">
    <title-animate :header-text="'归元禅寺·篇'">
    <template v-slot:text1>亲爱的玩家，欢迎参与本轮游戏-----困在时光里的爷爷</template>
    <template v-slot:text2>游戏目标-----替爷爷找到模糊信纸上的内容</template>
    </title-animate>
    <transition appear>
    <div style="border: 1px solid #000000;width: 60vh;height: 1px;border-radius: 2vh;margin-top: 5vh;"></div>
    </transition>
    <transition appear>
    <div class="StarButton" @click="active = true" >
      <div class="smallButton">
        <div class="textSpan">
          打开信封
        </div>
      </div>
    </div>
    </transition>
  </div>
    <div class="arrow" ref="arrow" >
    <arrow v-if="Bool"></arrow>
    </div>
    <div class="navBox">
    <side-nav @change="(bool1)=>{active = bool1}"></side-nav>
    </div>
    <img src="/PNG素材/溪山.png" class="img-fluid" style="position: absolute;bottom: 0;left: 0;z-index: 2;">
    <img src="/PNG素材/独坐.png" class="img-fluid" style="position: absolute;bottom: 25vh;left: 0;transform: scale(2.5, 2.5);z-index: 1;">
  </div>
  <break></break>
  <div class="fullBigBox" ref="fullBigBox" >

     <full-scroll-box></full-scroll-box>

  </div>

</template>

<style scoped>

.clueArrBox{
  position: absolute;
  left: 25vh;
  bottom: 15vh;
  font-size: 2vh;
  /*background-color: #1a3f3e;*/
  width: 80%;
  max-height: 20vh;
  font-family: lxgw-r;
}
.progress-nav{
  position: absolute;
  right: 10vh;
  bottom: 33vh;
}
.text{
  position: absolute;
  left: 20%;
  bottom: 20vh;
  font-size: 16px;
  width: 60%;
  min-width: 400px;
  height: 50vh;
  color: #181818;
  font-family: lxgw-r;
  /*background-color: #181818;*/
}
.mail{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50vh;
  transform: rotate(180deg);
  clip-path: polygon(50% 85%, 55% 91%, 70% 100%, 100% 0, 100% 100%, 0 100%, 0 0, 30% 100%, 45% 91%);
  background-image: url("/img/2.png");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 99;
}
.textSpan{
  width: 138px;
  height: 37px;
  font-family: 'STZhongsong';
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 37px;
  text-align: center;
  color: #FFFFFF;
}
.smallButton{
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 182px;
  height: 71px;
  border: 2px solid #E0D1BA;
  border-radius: 19px;
}
.StarButton{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3vh;
  width: 197px;
  height: 85px;
  background: #C97474;
  border-radius: 23px;
  cursor: pointer;
  z-index: 3;
}
.return{
  position: absolute;
  left: 2vh;
  top: 2vh;
  transition: all 0.5s;
}
.navBox{
  display: flex;
  justify-content: space-around;
  align-items: normal;
  flex-direction: column;
  position: fixed;
  right: 4vh;
  bottom: 3vh;
  z-index: 4;
}
.fullBigBox{
  /*background-color: rgb(68, 114, 196);*/
  width: 100%;
  height: 120%;

}

.arrow{
  display: block;
  position: absolute;
  right: 4vh;
  transform: scale(1.4, 1.4);
  cursor: pointer;
  opacity: 0.5;
  animation: findDown 1s linear .2s infinite;
}

@keyframes findDown {
  0%{
    translate: 0 -10%;
    opacity: 0.2;
  }
  50%{
    translate: 0 0;
    opacity: 0.7;
  }
  100%{
    translate: 0 10%;
    opacity: 1;
  } }
.full{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("/PNG素材/web.png");
  background-size: cover;
  background-origin: border-box;
  background-color: rgba(118, 161, 176, 0.99);
}
.textTitleBox{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.v-enter-from{
  translate: 0 120%;
  opacity: 0;
}
.v-enter-active{
  transition: all 0.8s linear 0.5s;
}
.v-enter-to{
  opacity: 1;
}
</style>