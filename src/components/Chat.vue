<script setup>
import ChatForm from "./Chat-Form.vue"
const onOpenChat = () => {
  document.querySelector(".form-container").style.display = "block"
  document.querySelector(".chat-box").classList.add("chat-box-active")
}
</script>

<template>
  <div class="chat">
    <ChatForm />
    <div class="chat-box" v-on:click="onOpenChat">
      <img class="chat-box-icon" src="../Image/icons8-abobora-de-halloween-48.png" alt="" />
      <span class="chat-box-title">Chat</span>
    </div>
  </div>
</template>

<style scoped>
.chat {
  position: fixed;
  bottom: 15px;
  right: 20px;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 3;
}

.chat-box {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 13px 22px;
  cursor: pointer;
  width: 50px;
  border-radius: 100%;
  background-color: #000000;
  transition: opacity 2s ease-in, transform 1.5s ease-out;
}
.chat-box-active {
  opacity: 0;
  transform: translateY(40px);
}
@media (min-width: 768px) {
  .chat-box {
    width: 100%;
    border-radius: 25px;
  }
}
.chat-box-icon {
  width: 20px;
  height: 20px;
}

.chat-box-title {
  display: none;
  font-size: 15px;
  color: #c49f52;
  font-weight: bold;
}

@media (min-width: 768px) {
  .chat-box-title {
    display: inline;
  }
}
</style>
