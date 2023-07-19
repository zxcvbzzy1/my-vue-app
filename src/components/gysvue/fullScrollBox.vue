<script setup>
import Message from "@/components/icons/message.vue";
import {ref, watch} from "vue";
import ImgTest from "@/components/gysvue/imgTest.vue";
import VideoTest1 from "@/components/gysvue/videoTest1.vue";
import VideoTest2 from "@/components/gysvue/videoTest2.vue";
import Poem1 from "@/components/gysvue/poem1.vue";
import VideoTest3 from "@/components/gysvue/video-test3.vue";
import Inter1 from "@/components/gysvue/inter1.vue";
import VideoTest4 from "@/components/gysvue/videoTest4.vue";
import Inter2 from "@/components/gysvue/inter2.vue";
import VideoTest5 from "@/components/gysvue/video-test5.vue";
import Inter4 from "@/components/gysvue/inter4.vue";
import Chat from "@/components/gysvue/chat.vue";



const items=ref(0)
function loadMore(){
  items.value+=1
}
const flag=ref(false)
const flag2=ref(false)
const flag4=ref(false)
const fFlag = ref(false)
const fFlag2 = ref(false)
const fFlag3 = ref(false)
const fFlag4 = ref(4)
const fFlag5 = ref(false)
</script>
<template>
  <el-timeline class="root" >
    <div v-infinite-scroll="loadMore"  :infinite-scroll-distance="10" >
      <!--第一页-->
        <el-timeline-item  placement="top" size="large" >
        <div class="content row">
          <div class="textBox col-lg-3" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
            <div class="timeBox" >
              <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                <message></message>
              </div>
              <n-time type="datetime" />
            </div>
            <!--              文本提示区-->

          </div>
          <div class="col-lg-1"></div>
          <div class="interactive col-lg-7 row" >
            <div class="col-auto"></div>
            <div class="col-md-10 col-sm-10 col-xl-10">
              <!--              操作交互区-->

            </div>
            <div class="col-auto"></div>
          </div>
          <div class="col-auto"></div>
        </div>
        </el-timeline-item>

        <el-timeline-item  placement="top" size="large" >
        <div class="content row">
          <div class="textBox col-lg-3" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
            <div class="timeBox" >
              <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                <message></message>
              </div>
              <n-time type="datetime" />
            </div>
            <!--              文本提示区-->
            <video-test3  :flag="fFlag5" ></video-test3>
          </div>
          <div class="col-lg-1"></div>
          <div class="interactive col-lg-7 row" >
            <div class="col-auto"></div>
            <div class="col-md-10 col-sm-10 col-xl-10">
              <!--              操作交互区-->
              <inter1  @up="(bool1)=>{fFlag5=bool1}"></inter1>
            </div>
            <div class="col-auto"></div>
          </div>
          <div class="col-auto"></div>
        </div>
      </el-timeline-item>

        <el-timeline-item placement="top" size="large" >
        <div class="content row">
          <div class="textBox col-lg-3" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
            <div class="timeBox" >
              <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                <message></message>
              </div>
              <n-time type="datetime" />
            </div>
            <!--              文本提示区-->
            <video-test4   ></video-test4>
          </div>
          <div class="col-lg-1"></div>
          <div class="interactive col-lg-7 row" >
            <div class="col-auto"></div>
            <div class="col-md-10 col-sm-10 col-xl-10">
              <!--              操作交互区-->
              <inter2 ></inter2>
            </div>
            <div class="col-auto"></div>
          </div>
          <div class="col-auto"></div>
        </div>
      </el-timeline-item>

        <el-timeline-item  placement="top" size="large" >
        <div class="content row">
          <div class="textBox col-lg-3" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
            <div class="timeBox" >
              <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                <message></message>
              </div>
              <n-time type="datetime" />
            </div>
            <!--              文本提示区-->
            <video-test5  :flag="fFlag5" ></video-test5>
          </div>
          <div class="col-lg-1"></div>
          <div class="interactive col-lg-7 row" >
            <div class="col-auto"></div>
            <div class="col-md-10 col-sm-10 col-xl-10">
              <!--              操作交互区-->
              <inter4  @up="(bool1)=>{fFlag5=bool1}"></inter4>
            </div>
            <div class="col-auto"></div>
          </div>
          <div class="col-auto"></div>
        </div>
      </el-timeline-item>

        <el-timeline-item  placement="top" size="large" >
          <div class="content row">
            <div class="textBox col-lg-3" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
              <div class="timeBox" >
                    <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                      <message></message>
                    </div>
                <n-time type="datetime" />
              </div>
<!--              文本提示区-->
              <video-test2 @up="fFlag = true" :flag="fFlag2" @up2="fFlag3=true" :flag2="fFlag4"></video-test2>
            </div>
            <div class="col-lg-1"></div>
            <div class="interactive col-lg-7 row" >
              <div class="col-auto"></div>
              <div class="col-md-10 col-sm-10 col-xl-10">
<!--              操作交互区-->
              <poem1 :flag="fFlag" :flag2="fFlag3" @up="()=>{fFlag2=true}" @up2="fFlag4-=1"></poem1>
              </div>
              <div class="col-auto"></div>
            </div>
            <div class="col-auto"></div>
          </div>
        </el-timeline-item>


      <!--最后一页-->
      <el-timeline-item  placement="top" size="large" >
        <div class="content row">
          <div class="textBox col-lg-4" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
            <div class="timeBox" >
                  <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                    <message></message>
                  </div>
              <n-time type="datetime" />
            </div>

            <video-test1 :flag="flag" :flag2="flag2" :flag4="flag4"></video-test1>

          </div>
          <div class="col-auto"></div>
          <div class="interactive col-lg-7 row" >
            <img-test @up="flag = true" @up2="flag2 = true" @up3="flag4 = true"></img-test>
          </div>
          <div class="col-auto"></div>
        </div>
      </el-timeline-item>
      <transition-group name="scroll-box">
              <el-timeline-item  placement="top" v-for="item in items" :key="item"  size="large" >
                <div class="content row">
                  <div class="textBox col-lg-3" v-animate-onscroll.repeat="'animate__animated animate__fadeIn'">
                    <div class="timeBox" >
                      <el-popover
                          placement="top-start"
                          title="消息"
                          :width="200"
                          trigger="hover"
                          :content="textMessage"
                      >
                        <template #reference>
                          <div class="svgBox" v-animate-onscroll.repeat="'animate__animated animate__wobble animate__slow'">
                            <!--            <slot name="icon"></slot>-->
                            <message></message>
                          </div>
                        </template>
                      </el-popover>
                      <n-time type="datetime" />
                    </div>
                    <!--              导语-->


                    <!--              <el-card style="box-shadow: var(&#45;&#45;el-box-shadow-dark);margin-left: 1vh;margin-bottom: 1vh;">-->
                    <!--                <v-typical-->
                    <!--                    class="blink"-->
                    <!--                    :steps="textMessageArr"-->
                    <!--                    :loop="1"-->
                    <!--                    style="font-size: 16px;"-->
                    <!--                ></v-typical>-->
                    <!--              </el-card>-->

                  </div>
                  <div class="col-auto"></div>
                  <div class="interactive col-lg-7 row" >
                    <!--            内容 -->

                  </div>
                  <div class="col-auto"></div>
                </div>
              </el-timeline-item>
            </transition-group>
    </div>
  </el-timeline>
</template>

<style scoped>
/*noinspection CssInvalidPropertyValue*/

.interactive{
  margin-top: 10vh;
  height: 70vh;
}

.content.row{
  position: relative;
  width: 100%;
  height: 120vh;
  z-index: 2;

}
.blink::after {
  content: '|';
  animation: blink 1s infinite step-start;
}
@keyframes blink {
  50% {
    opacity: 0;
  }
}

.root{
  background-image: url("/PNG素材/web.png");
  background-size: contain ;
  background-repeat: repeat;

  color: white;
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
}
.timeBox{
  font-size: 2vh;
  color: white;
  height: 6vh;
  z-index: 4;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 2vh;
}

.scroll-box-enter-from{
  opacity: 0;
  translate: -20px 0;
}
.scroll-box-enter-active{
  transition: all 1s ;
}
.scroll-box-enter-to{
  opacity: 1;
  translate: 0 0;
}

</style>