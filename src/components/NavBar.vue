<script setup>
import IconHambuguerMenu from "./icons/IconHambuguerMenu.vue"
import IconSearch from "./icons/IconSearch.vue"
import IconBag from "./icons/IconBag.vue"
import IconLogo from "./icons/IconLogo.vue"
import IconProfile from "./icons/IconProfile.vue"
import MenuModal from "./MenuModal.vue"
import NavBarInfo from "./NavBarInfo.vue"
import PopUp from "./PopUp.vue"
import { ref } from "@vue/reactivity"
const samePage = ref(false)
const timer_miliseconds = 3000

const onOpen = () => document.querySelector(".modal-hamburguer").classList.add("modal-hamburguer-active")
const goTo = (path = "/") => {
  if (window.location.pathname !== path) window.location.pathname = path
  else {
    if (samePage.value === true) return
    samePage.value = true
    setTimeout(() => (samePage.value = false), timer_miliseconds)
  }
}
</script>

<template>
  <PopUp v-if="samePage" :timer_miliseconds="timer_miliseconds" />
  <div id="navBar">
    <IconHambuguerMenu v-on:click="onOpen" />
    <IconLogo @click="goTo()" />
    <MenuModal />
    <div>
      <IconSearch />
      <IconBag @click="goTo('/Cart')" />
      <IconProfile />
    </div>
  </div>
  <NavBarInfo />
</template>

<style scoped>
#navBar {
  background-color: #ffffff;
  color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
}
@media (min-width: 768px) {
  #navBar {
    padding: 0 15px;
    justify-content: space-around;
  }
}
</style>
