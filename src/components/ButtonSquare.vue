<script setup>
const { loading = false } = defineProps(["loading"])
</script>

<template>
  <button class="button-square"><slot v-if="!loading"></slot><span class="loading" v-if="loading"></span></button>
</template>

<style scoped>
.button-square {
  background-color: #202020;
  color: #ffffff;
  font-size: 14px;
  border: 1px solid #202020;
  padding: 15px;
  transition: background 0.2s ease-in-out, color 0.2s ease-in-out;
  cursor: pointer;
}

.button-square:hover {
  background-color: #ffffff;
  border: 1px solid #202020;
  color: #202020;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  display: block;
  width: 20px;
  height: 20px;
  border: 4px solid #81c784;
  border-top-color: #455a64;
  border-radius: 100%;
  animation-name: loading;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  margin: 0 auto;
  line-height: normal;
}
</style>
