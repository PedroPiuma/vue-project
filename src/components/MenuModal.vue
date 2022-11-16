<script setup>
import IconCloser from "./icons/IconCloser.vue"
const { goTo } = defineProps(["goTo"])
const onClose = () => document.querySelector(".modal-hamburguer-active").classList.remove("modal-hamburguer-active")
const openAccordion = () => {
  document.querySelector(".arrow").classList.toggle("arrow-active")
  document.querySelector(".accordion-content").classList.toggle("accordion-content-active")
}
</script>

<template>
  <div class="modal-hamburguer">
    <div class="modal-hamburguer-links">
      <span class="modal-list-item login" @click="goTo('/Login')">Login / Cadastra-se</span>
      <span class="modal-list-item accordion-menu" v-on:click="openAccordion">Produtos <span class="arrow"></span></span>
      <div class="accordion-content">
        <a class="modal-list-item accordion-modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Teste 1</a>
        <a class="modal-list-item accordion-modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Teste 2</a>
        <a class="modal-list-item accordion-modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Teste 3</a>
      </div>
      <a class="modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Onde Encontrar</a>
      <a class="modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Nossa Marca</a>
      <a class="modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Conteúdos</a>
      <a class="modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Contato</a>
      <a id="plusCategory" class="modal-list-item" href="http://" target="_blank" rel="noopener noreferrer">Mês das Crianças</a>
    </div>
    <div class="modal-hamburguer-closer-container">
      <IconCloser v-on:click="onClose" />
    </div>
  </div>
</template>

<style scoped>
.modal-hamburguer {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  max-width: 0;
  overflow: hidden;
  transition: max-width 0.7s cubic-bezier(0.19, 0.36, 0.25, 0.78);
  z-index: 3;
}
.modal-hamburguer-active {
  max-width: 100%;
}

@media (min-width: 768px) {
  .modal-hamburguer {
    display: flex;
    position: inherit;
    height: fit-content;
    max-width: 100%;
  }

  .login,
  #plusCategory,
  .modal-hamburguer-closer-container,
  span.arrow {
    display: none;
  }
}
.modal-hamburguer-links {
  background-color: #f5f5f5;
  flex-direction: column;
  display: flex;
}

@media (min-width: 768px) {
  .modal-hamburguer-links {
    flex-direction: row;
    background-color: #ffffff;
  }
}

.modal-list-item {
  padding: 15px 30px;
  font-size: 16px;
  border-bottom: 1px solid #d4d4d4;
  color: #141414;
  width: 200px;
  cursor: pointer;
}
.modal-list-item:hover {
  color: #646363;
}
@media (min-width: 768px) {
  .modal-list-item {
    border: none;
    width: fit-content;
  }
}

.modal-hamburguer-closer-container {
  background-color: #202020;
  padding: 15px 20px;
}

.accordion-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.accordion-content {
  display: flex;
  flex-direction: column;
  max-height: 0;
  transition: max-height 0.5s ease-in;
  overflow: hidden;
}
@media (min-width: 768px) {
  .accordion-content {
    position: fixed;
    background-color: #ffffff;
    flex-direction: row;
    top: 60px;
  }
}
.accordion-content-active {
  max-height: 170px;
}

.accordion-modal-list-item {
  padding-left: 50px;
  color: #666666;
}

.arrow {
  display: inline-block;
  height: 15px;
  width: 15px;
  border-top: 3px solid #202020;
  border-right: 3px solid #202020;
  transform: rotate(45deg);
  transition: transform 0.5s ease-in-out;
}

.arrow-active {
  transform: rotate(135deg);
}
</style>
