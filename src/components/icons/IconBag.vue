<script setup>
import { ref } from "@vue/reactivity"
import { watch } from "@vue/runtime-core"

const storage = localStorage.productsToSell2022 || false
const itemsQtd = ref(JSON.parse(storage).length || 0)
</script>

<template>
  <div class="bag-box">
    <img class="icon-bag" src="../../Image/icons8-sacola-de-compras-50.png" alt="" />
    <span class="bag-counter">{{ itemsQtd }}</span>
  </div>
</template>

<style scoped>
.icon-bag {
  height: 27px;
  width: 27px;
}

.bag-box {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.bag-box:hover {
  box-shadow: 0 0 10px 2px #81c784;
  border-radius: 100%;
}
.bag-counter {
  display: block;
  background-color: #202020;
  color: #ffffff;
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
