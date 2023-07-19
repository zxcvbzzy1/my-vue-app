<script>

</script>
<template>
<div class="box">
  <div class="imgBox" style="z-index: 5;" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
  <div class="imgBox2" style="z-index: 5;" v-animate-onscroll.repeat="'animate__animated animate__fadeInRight'"></div>
  <el-card style="margin-left: 1vh;width: 35%;
  z-index: 3;position: absolute;top: 25%;right: 15%;padding: 3vh 4vh 0vh 4vh;border-radius: 5px;
  margin-bottom: 1vh;color: #ffffff; background-color: #D1AE7A;border: #D1AE7A;box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61); ">
    <h2>用户创作平台</h2>
    <br>
    <div>
    您是否想分享自己独特的旅游路线与经历？您是否对旅行过程的景点有独特的文化理解？您是否不仅仅满足于我们现有的路线产品？那么快点击下方按钮，跳转至我们用户创作平台！
    在这里，我们相信每个人都有自己独特的故事和宝贵的见解。被选中的用户，将参与到我们的路线创作中，获得丰厚的奖品！
    </div>
      <div class="StarButton" style="transform: scale(0.7, 0.7);">
        <div class="smallButton">
          <div class="textSpan">
            用户创作平台
          </div>
        </div>
      </div>
  </el-card>

</div>
</template>
<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.textSpan{
  width: 138px;
  height: 37px;
  font-family: 'STZhongsong';
  font-style: normal;
  font-weight: 400;
  font-size: 23px;
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
  margin-left: -3vh;
  width: 197px;
  height: 85px;
  background: #C97474;
  border-radius: 23px;
  cursor: pointer;
  z-index: 3;
}
.imgBox2{
  position: absolute;
  top: 5%;
  /*transform: rotate(-9.92deg);*/
  right: -80%;
  z-index: 6;
  width: 100%;
  height: 20vh;
  background-image: url("/PNG素材/抠图.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.imgBox{
  position: absolute;
  top: 5%;
  /*transform: rotate(-9.92deg);*/
  left: -2%;
  z-index: 0;
  width: 100%;
  height: 60vh;
  background-image: url("/PNG素材/马拉车.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-origin: border-box;
}
.box{

  padding: 2vh;
  width: 100%;
  height: 100%;
}
</style>