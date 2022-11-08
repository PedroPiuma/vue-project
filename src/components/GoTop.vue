<script setup>
const goTop = () => (document.documentElement.scrollTop = document.body.scrollTop = 0)
const scrollCheck = () => {
  window.document.addEventListener("scroll", () => {
    const navbar = document.querySelector(".go-top-button")
    window.pageYOffset > 100 ? navbar.classList.add("go-top-button-on") : navbar.classList.remove("go-top-button-on")
  })
}
window.addEventListener("scroll", scrollCheck)
</script>

<template>
  <div class="go-top-button" @click="goTop"><span class="go-top-arrow"></span></div>
</template>

<style scoped>
.go-top-button {
  background-color: #202020;
  width: 40px;
  height: 40px;
  position: fixed;
  bottom: 15px;
  left: 20px;
  display: flex;
  justify-content: center;
  padding-top: 15px;
  cursor: pointer;
  transition: opacity 0.5s ease-in;
  opacity: 0;
  z-index: 2;
}
.go-top-button-on {
  opacity: 1;
}

.go-top-arrow {
  border-top: 3px solid gray;
  border-right: 3px solid gray;
  width: 20px;
  height: 20px;
  display: block;
  transform: rotate(-45deg);
}
</style>
