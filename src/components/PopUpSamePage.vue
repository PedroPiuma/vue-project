<script setup>
const props = defineProps(["timer_miliseconds"])
const page = () => {
  switch (window.location.pathname) {
    case "/":
      return "Home"
    case "/Cart":
      return "Lista de Compras"
    case "/Login":
      return "Login"
    default:
      return "Default"
      break
  }
}
</script>

<template>
  <div class="pop" :style="{ animationDuration: props.timer_miliseconds + 'ms' }">Voce já está na página {{ page() }}</div>
</template>

<style scoped>
@keyframes show {
  0% {
    transform: translateY(-200%);
    opacity: 1;
  }
  10% {
    transform: translateY(0);
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.pop {
  width: 100%;
  padding: 10px;
  top: 75px;
  left: 0;
  right: 0;
  background-color: #455a64;
  box-shadow: 0 0 10px 5px #81c784;
  position: fixed;
  margin: 0 auto;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  animation: show ease-out;
  opacity: 0;
  z-index: 4;
}
</style>
