<script setup>
import { ref, onMounted } from "vue"
const infos = ["FRETE GRÁTIS. CONFIRA AS REGRAS.", "ATÉ 6X SEM JUROS.", "CUIDADO COM PERFIS FALSOS NO INSTAGRAM!"]
const count = ref(0)
const intervalTime = ref(5000)
const onCounter = (add) => (add ? (count.value >= 2 ? (count.value = 0) : (count.value += 1)) : count.value <= 0 ? (count.value = 2) : (count.value -= 1))
const timer = () => setInterval(() => onCounter(true), intervalTime.value)
const onClick = (event) => (event.target.classList.value === "navbar-info-arrow-right" ? onCounter(true) : onCounter(false))
const scrollCheck = () => {
  window.document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar-info")
    window.pageYOffset > 100 ? navbar.classList.add("navbar-info-on") : navbar.classList.remove("navbar-info-on")
  })
}

onMounted(() => {
  timer()
  scrollCheck()
})
</script>

<template>
  <div class="navbar-info">
    <span class="navbar-info-arrow-left" @click="onClick"></span>
    <span class="navbar-info-text">{{ infos[count] }}</span>
    <span class="navbar-info-arrow-right" @click="onClick"></span>
  </div>
</template>

<style scoped>
.navbar-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0;
  padding: 0 15px;
  overflow: hidden;
  background-color: #202020;
  transition: height 0.2s ease-in;
}
.navbar-info-on {
  height: 50px;
}

.navbar-info-text {
  text-align: center;
  width: 100%;
  letter-spacing: -1px;
  display: inline-block;
  transition: transform 0.2s ease-in;
}

.navbar-info-arrow-left,
.navbar-info-arrow-right {
  width: 10px;
  height: 10px;
  border-left: 2px solid rgb(255, 255, 255);
  border-bottom: 2px solid rgb(255, 255, 255);
}
.navbar-info-arrow-left {
  transform: rotate(45deg);
}
.navbar-info-arrow-right {
  transform: rotate(225deg);
}
</style>
