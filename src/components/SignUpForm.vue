<script setup>
import { ref } from "@vue/reactivity"
import ButtonSquare from "../components/ButtonSquare.vue"
import getFormData from "../services/getFormData.js"
const passwordText = ref("")
const onValidation = ref()
const loading = ref(false)
const formData = ref({ email: "Default" })

const onSubmitSignUp = (event) => {
  loading.value = true
  const request = async () => {
    try {
      await new Promise((resolve, reject) => setTimeout(() => resolve((formData.value = getFormData(event, "signup"))), 3000))
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
  <form class="form" name="signup" @submit.prevent="onSubmitSignUp">
    <h1 class="form-title">SOU UM NOVO CLIENTE</h1>
    <label for="email-signup">Email*</label>
    <input type="email" name="email-signup" id="email-signup" placeholder="Digite seu e-mail..." required />

    <label for="name-signup">Nome*</label>
    <input type="text" name="name-signup" id="name-signup" placeholder="Digite seu nome..." minlength="2" maxlength="20" required />

    <label for="lastname-signup">Sobrenome*</label>
    <input type="text" name="lastname-signup" id="lastname-signup" placeholder="Digite seu sobrenome..." minlength="2" maxlength="40" required />

    <label for="cpf">CPF*</label>
    <input type="text" name="cpf" id="cpf" placeholder="Digite seu CPF..." maxlength="14" minlength="14" required />

    <label for="password-signup">Senha*</label>
    <input type="password" name="password-signup" id="password-signup" placeholder="Digite sua senha aqui..." required autocomplete="off" />

    <a class="secondary-link" href="#">Esqueceu sua senha?</a>
    <ButtonSquare :loading="loading">CADASTRAR</ButtonSquare>
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
}
.form input:focus {
  outline: none;
}
.secondary-link {
  font-size: 12px;
  color: #878787;
  text-decoration: none;
  align-self: flex-end;
  margin-bottom: 20px;
}
</style>
