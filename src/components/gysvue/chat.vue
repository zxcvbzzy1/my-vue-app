<template>
  <div>
    <div ref="chatBox" class="chat-box">
      <div  class="user2">
        <el-avatar
            src="/img/user2.jpg"
        />
        <div class="others-message" style="width: 20vh;">
          <img src="/img/map1.jpg" class="img-fluid">
        </div>

      </div>
      <div v-for="(message, index) in messages" :key="index">
        <div v-if="message.from === 'me'" class="user1">
          <div class="my-message">{{ message.content }}</div>
          <el-avatar
              src="/img/user1.jpg"
          />
        </div>
        <div v-else-if="message.from === 'user2'" class="user2">
          <el-avatar
              src="/img/user2.jpg"
          />
          <div class="others-message">{{ message.content }}</div>
        </div>
        <div v-else-if="message.from === 'user3'" class="user2">
          <el-avatar
              src="/img/user3.jpg"
          />
          <div class="others-message">{{ message.content }}</div>
        </div>
      </div>
    </div>
    <form @submit.prevent="sendMessage" class="send-message-form">
      <el-input v-model="messageInput" placeholder="请输入消息内容" clearable class="message-input" />
      <button type="submit" class="send-message-button">发送</button>
    </form>
  </div>
</template>

<script setup>
import {nextTick, ref, watch} from "vue";


    // 消息列表数据
    const messages = ref([
      { from: "user2", content: "2023.6.17 12:00 到黄鹤楼一游~" },
      { from: "me", content: "诶，我也去了黄鹤楼，值得一看！" },
      { from: "user3", content: "有没有下午一起组队解锁新路线的友友呀~" },
    ]);

    // 消息输入框数据
    const messageInput = ref("");

    // 发送消息
    const sendMessage = () => {
      // 获取输入框的内容
      const message = messageInput.value.trim();
      if (!message) {
        return;
      }
      // 添加到消息列表
      messages.value.push({ from: "me", content: message });
      messageInput.value = "";
    };

    // 自动滚动到底部
    const chatBox = ref(null);
    const scrollToBottom = () => {
      chatBox.value.scrollTop = chatBox.value.scrollHeight;
    };

    // 监听消息列表的变化
    const messagesWatcher = () => {
          nextTick(()=> {
            scrollToBottom();
          })
    };
    messagesWatcher();
    watch(messages, messagesWatcher,{ deep: true });




</script>

<style scoped>
.user2{
  display: flex;
  justify-content: left;
  align-items: center;
}
.user1{
  display: flex;
  justify-content: right;
  align-items: center;
}
::-webkit-scrollbar{
  width: 5px;
}
::-webkit-scrollbar-track{
  background-color: rgba(0, 0, 0, 0);
}
::-webkit-scrollbar-thumb{
  border-radius: 10px;
  background-color:  #D1AE7A;
  box-shadow: 0px 4px 4px rgba(71, 52, 23, 0.61);

}
::-webkit-scrollbar-button{
  height: 0;
}
::-webkit-scrollbar-corner{
  background-color: transparent;
}

/*noinspection CssInvalidPropertyValue*/
.chat-box {
  -webkit-mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0),#000,#000,#000,#000,#000);
  -webkit-mask-size: 100% 100%;
  -webkit-mask-position: center;
  -webkit-mask-repeat: no-repeat;
  /*border: 1px solid #ccc;*/
  height: 300px;
  overflow-y: scroll;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}

.my-message {
  background-color: #acf7c1;
  border-radius: 1vh;
  padding: 1vh 2vh;
  float: right;
  margin: 1vh;
  box-shadow: var(--el-box-shadow-light);
}

.others-message {
  background-color: #ffffff;
  float: left;
  border-radius: 1vh;
  padding: 1vh 2vh;
  margin: 1vh;
  box-shadow: var(--el-box-shadow-light);
}

.send-message-form {
  margin-top: 20px;
  display: flex;
}

.message-input {
  flex: 1;
  padding: 5px;
  border: none;
}

.send-message-button {
  margin-left: 10px;
  padding: 1vh 2vh;
  border: none;
  background-color: #D1AE7A;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
}
</style>