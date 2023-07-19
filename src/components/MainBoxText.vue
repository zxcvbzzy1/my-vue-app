<script setup>
import Arrow from "@/components/icons/arrow.vue";

const props = defineProps({
  margin:{
    type:String,
    default:'0 0 0 5%'
  },
  afterMargin:{
    type:String,
    default:'20% 0 0 40%'
  },
  height:{
    type:String,
    default:'60vh'
  },
  afterheight:{
    type:String,
    default:'30vh'
  },
  textColor: String,
  length: {
    type:Number,
    default:'62'
  },
  imgSrc:{
    type:String,
    default:null
  },
  duration:{
    type:Number,
    default:1000,
  },
  left:{
    type:String,
    default:'100%'
  },
  backColor:{
    type:String,
    default:'rgb(78,118,145)',
  },
  aHref:String,
  rotateDeg:{
    type:String,
    default:'rotate(-90deg)'
  },
  transLateX:{
    type:Number,
    default: -10
  }
})
</script>

<template>
  <div class="row rowTop" >


    <div class="textBox col-lg-6 col-sm-7" style="overflow: hidden;box-shadow: 0 0 0 rgb(0,0,0,0);">
      <div class="img-box">

     <kinesis-container event="move">
      <kinesis-element type="translate" strength="30" >
      <kinesis-container event="scroll" :duration="duration" >
        <kinesis-element type="depth" strength="2">
        <kinesis-element  type="scale" strength="5">
        <kinesis-element tag="img" :src="imgSrc" class="img-fluid" type="translate" strength="100" axis="x">
<!--      <img :src="imgSrc" class="img-fluid" alt="...">-->
        </kinesis-element>
        </kinesis-element>
        </kinesis-element>
      </kinesis-container>
      </kinesis-element>
     </kinesis-container>
      </div>
    </div>
  <div class="textBox col-lg-6 col-sm-7 box" v-animate-onscroll.repeat="'changeAnimate'" v-wave="{
  color: '#AF8E5B',
  initialOpacity: 0.5,
  duration: 0.5,
  easing: 'ease-in',
}" >

      <a :href="aHref" >
      <h1 style="font-family: 'STZhongsong';
font-style: normal;
font-weight: 400;
font-size: 46px;
line-height: 61px;

color: #FFFFFF;"><slot name="header"></slot></h1>
      <div style="font-family: 'STZhongsong';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 27px;
color: #FFFFFF;
"><slot name="text"></slot></div>
      </a>
  </div>

  </div>
</template>

<style scoped>
/*包含以下四种的链接*/
a {
  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
.img-box{
  position: absolute;
  overflow: hidden;
  border-radius: 10px;
  padding: -15px;
  box-shadow: 0 5px 15px rgba(34, 39, 54, 0.08);
 /*border: solid 2px #000000;*/
}
.arrow{
  transform: v-bind(rotateDeg);
  opacity: 0.5;
  animation: findDown 1s linear .2s infinite;
}
@keyframes findDown {
  0%{
    translate: v-bind([transLateX+'%']) 0;
    opacity: 0.2;
  }
  50%{
    translate: 0 0;
    opacity: 0.7;
  }
  100%{
    translate: v-bind([-transLateX+'%']) 0;
    opacity: 1;
  } }
.arrowBow{
  width: 0;
  height: 0;
  transition: all 1s;
  position: absolute;
  left: v-bind(left);
  top: 0;
  background-color: v-bind(backColor);
  opacity: 0;

}
.arrowSmallBox{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.arrowBow.active{
  width: 20%;
  height: 100%;
  opacity: 0.5;
  transition: all 0.5s linear;
}

.rowTop{
  margin-top: 200px;
  margin-bottom: 400px;

}
.box{
  position: relative;
}
h1{
  color: v-bind(textColor);
}
.textBox{
  margin: v-bind(margin);
  height: v-bind(height);
  padding: 30px 60px;
  color: #3a3737;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(34, 39, 54, 0.08);
  transition: all 1s;
}
.textBox.col-lg-6.col-sm-7.changeAnimate{
  margin: v-bind(afterMargin);
  height: v-bind(afterheight);
  width: 40%;
  transition: all 1s linear ;
  position: absolute;
  opacity: 1;
  z-index: 9;
  background-color: white;
}
.textBox.col-lg-6.col-sm-7.img{

  background-position: center;
}
.textBox.col-lg-6.col-sm-7.box{
  position: absolute;
  background: #AF8E5B;
  box-shadow: 8px 7px 36px rgba(71, 52, 23, 0.74);
  border-radius: 45px;
}

</style>