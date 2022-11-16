<script setup>
const addOneOnBag = () => (document.querySelector(".bag-counter").innerText = Number(document.querySelector(".bag-counter").innerText) + 1)
</script>

<template>
  <button class="additionButton" @click="addOneOnBag">ADICIONAR</button>
</template>

<style scoped>
.additionButton {
  background-color: #141414;
  font-size: 11px;
  padding: 5px;
  border-radius: 5px;
  color: #ffffff;
  border: 1px solid #ffffff;
  cursor: pointer;
}
.additionButton:hover {
  background-color: #ffffff;
  color: #141414;
  border: 1px solid #141414;
}

.additionButton:active {
  background-color: #81c784;
}
</style>
