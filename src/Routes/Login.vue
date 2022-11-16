<script setup>
import ButtonSquare from "../components/ButtonSquare.vue"
import LoginForm from "../components/LoginForm.vue"
import SignUpForm from "../components/SignUpForm.vue"
</script>

<template>
  <div class="login">
    <LoginForm />
    <SignUpForm />
    <span class="secondary-link">*Campos Obrigatórios</span>
  </div>
</template>

<style scoped>
.login {
  background-color: #ffffff;
  padding: 30px;
}
.secondary-link {
  font-size: 12px;
  color: #878787;
  text-decoration: none;
  align-self: flex-end;
  margin-bottom: 20px;
}
</style>
