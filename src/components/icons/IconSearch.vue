<script setup>
import { reactive, ref } from "@vue/reactivity"
import SearchForm from "../SearchForm.vue"
const onSearch = ref(false)
</script>

<template>
  <div :class="[onSearch ? 'icon-search-container-active' : 'icon-search-container']">
    <SearchForm v-if="onSearch" :onSearch="onSearch" class="show" />
    <div @click="onSearch = !onSearch">
      <img v-if="!onSearch" class="icon-search" src="../../Image/icons8-pesquisar-30.png" alt="" />
      <img v-if="onSearch" class="icon-search-closer" src="../../Image/icons8-excluir-50.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.icon-search-container {
  display: inline-block;
}
.icon-search-container-active {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  height: 60px;
  z-index: 2;
  padding: 0 5px 0 15px;
  width: 100vw;
}
.icon-search,
.icon-search-closer {
  height: 25px;
  width: 25px;
  cursor: pointer;
  margin-right: 10px;
}

@keyframes showCloser {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.icon-search-closer {
  background-color: #202020;
  border-radius: 100%;
  box-shadow: 0 0 5px 5px rgb(0, 0, 0);
  vertical-align: middle;
  animation-name: showCloser;
  animation-duration: 1s;
}
</style>
