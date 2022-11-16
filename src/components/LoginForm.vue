<script setup>
import IconEye from "../components/icons/IconEye.vue"
import ButtonSquare from "../components/ButtonSquare.vue"
import getFormData from "../services/getFormData.js"
import delWhiteSpace from "../services/delWhiteSpace.js"
import { onMounted, watch } from "@vue/runtime-core"
import { ref } from "@vue/reactivity"
const passwordText = ref("")
const passwordType = ref("password")
const showPassword = ref(false)
const formData = ref({ email: "Default" })
const loading = ref(false)

const onSubmitLogin = (event) => {
  loading.value = true
  const request = async () => {
    try {
      await new Promise((resolve, reject) => setTimeout(() => resolve((formData.value = getFormData(event, "login"))), 3000))
      alert(JSON.stringify(formData.value))
      event.target.reset()
    } catch (error) {
      alert(error.message)
    } finally {
      loading.value = false
    }
  }
  request()
}
</script>

<template>
  <form class="form" name="login" @submit.prevent="onSubmitLogin">
    <h1 class="form-title">JÁ TENHO CADASTRO</h1>

    <label for="email-login">Email*</label>
    <input type="email" name="email-login" id="email-login" autocomplete="username" placeholder="seuemailaqui@email.com" required />

    <label for="password-login">Senha* </label>
    <div class="password-box">
      <input
        :type="passwordType"
        name="password-login"
        id="password-login"
        autocomplete="current-password"
        placeholder="Digite sua senha aqui..."
        required
        @keyup="delWhiteSpace"
      />
      <IconEye
        :showPassword="showPassword"
        @click="
          () => {
            showPassword = !showPassword
            passwordType = passwordType === 'password' ? 'text' : 'password'
          }
        "
      />
    </div>

    <a class="secondary-link" href="#">Esqueceu sua senha?</a>
    <ButtonSquare :loading="loading">ENTRAR</ButtonSquare>
  </form>
</template>

<style scoped>
.form {
  display: flex;
  flex-direction: column;
  padding: 30px 0;
}

.form-title {
  font-size: 27px;
  color: #202020;
  font-weight: bold;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-align: center;
  margin-bottom: 20px;
  letter-spacing: -1px;
}

.form label {
  color: #202020;
  font-weight: bold;
  font-size: 15px;
}

.form input {
  border: none;
  border-bottom: 1px solid #b2b2b2;
  margin-bottom: 10px;
  height: 30px;
  width: 100%;
}
.form input:focus {
  outline: none;
}

.password-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.secondary-link {
  font-size: 12px;
  color: #878787;
  text-decoration: none;
  align-self: flex-end;
  margin-bottom: 20px;
}
</style>
