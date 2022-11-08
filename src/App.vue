<script setup>
import NavBar from "./components/NavBar.vue"
import FooterInfo from "./components/FooterInfo.vue"
import GoTop from "./components/GoTop.vue"
import Chat from "./components/Chat.vue"
import Home from "./Routes/Home.vue"
import Cart from "./Routes/Cart.vue"
import NotFound from "./Routes/NotFound.vue"
import { ref, computed } from "vue"

const routes = { "/": Home, "/Cart": Cart }
const currentPath = ref(window.location.pathname)
const currentView = computed(() => routes[currentPath.value] || NotFound)

window.addEventListener("hashchange", () => (currentPath.value = window.location.pathname))
</script>

<template>
  <header class="header">
    <NavBar />
    <Chat />
    <GoTop />
  </header>
  <main><component :is="currentView" /></main>
  <footer><FooterInfo /></footer>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;
}
</style>
