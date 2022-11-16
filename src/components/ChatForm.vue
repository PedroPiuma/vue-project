<script setup>
const onCloseChat = () => {
  document.querySelector(".form-container").style.display = "none"
  document.querySelector(".chat-box.chat-box-active").classList.remove("chat-box-active")
}

const onSubmit = (event) => {
  event.preventDefault()
  const data = new FormData(event.target)
  const response = {
    name: data.get("name"),
    email: data.get("email"),
    tel: data.get("tel"),
    message: data.get("message"),
  }
  console.log(response)
}
</script>

<template>
  <div class="form-container">
    <div class="form-title">
      <p class="form-title-text">Chat Vue</p>
      <span class="form-title-icon" v-on:click="onCloseChat"><div class="form-title-icon-box-line"></div></span>
    </div>
    <div class="formChat-container">
      <form class="formChat" action="" v-on:submit="onSubmit">
        <label for="name" class="formChat-label">Name</label>
        <input class="formChat-input" type="text" name="name" id="name" required />
        <label for="email" class="formChat-label">E-mail</label>
        <input class="formChat-input" type="email" name="email" id="email" required />
        <label for="tel" class="formChat-label">Número de telefone</label>
        <input class="formChat-input" type="tel" name="tel" id="tel" required />
        <label for="message" class="formChat-label">Mensagem</label>
        <textarea name="message" id="message" cols="30" rows="10" required></textarea>
        <button class="formChat-container-btn">Start Chat</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.form-container {
  display: none;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
}
.form-title {
  display: flex;
  background-color: #000000;
  position: relative;
  padding: 8px 14px;
}
.form-title-text {
  text-align: center;
  color: #c49f52;
  font-weight: bold;
  font-size: 15px;
}

.form-title-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  right: 15px;
  top: 10px;
  cursor: pointer;
  width: 20px;
  height: 20px;
}

.form-title-icon-box-line {
  display: block;
  background-color: #c49f52;
  height: 2px;
  width: 80%;
}

.formChat-container {
  overflow: scroll;
  height: 100vh;
  background-color: #ffffff;
}
.formChat {
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 15px 30px;
}

.formChat-label {
  color: #141414;
  font-weight: bold;
  padding: 15px 0;
}

.formChat-input {
  height: 40px;
  border: 1px solid #d1d1d1;
  padding: 0 15px;
}
.formChat-input:hover,
.formChat-input:focus {
  outline: #000000;
}

.formChat-container-btn {
  background-color: #141414;
  text-align: center;
  color: #c49f52;
  font-weight: bold;
  font-size: 15px;
  border: none;
  width: 105px;
  align-self: flex-end;
  padding: 10px;
  border-radius: 3px;
  margin-top: 20px;
}
</style>
