<script setup>
import { onMounted, ref, watch } from "@vue/runtime-core"

let startTimer
const inputText = ref("")
const onSearch = (event) => {
  inputText.value = event.target.value
  if (!inputText.value.length) return
  clearTimeout(startTimer)
  startTimer = setTimeout(() => console.log(inputText.value), 300)
}

onMounted(() => {
  const input = document.querySelector(".form-search-input")
  input.focus()
})
</script>
<template>
  <form class="form-search" @submit.prevent @keyup="onSearch">
    <input class="form-search-input" type="text" placeholder="O que você deseja buscar?" />
  </form>
</template>

<style scoped>
@keyframes showForm {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}
.form-search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  animation-name: showForm;
  animation-duration: 2s;
}

.form-search-input {
  border: none;
  width: 100%;
  margin: 0 10px;
  padding: 10px;
  font-size: 16px;
}
.form-search-input:focus {
  outline: none;
}
</style>
