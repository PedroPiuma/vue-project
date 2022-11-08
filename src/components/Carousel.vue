<script setup>
import ProductBox from "./ProductBox.vue"
const myProducts = ["Todos", "Produto 2", "Produto 3", "Produto 4", "Produto 5", "Produto 6", "Produto 7", "Produto 8"]
</script>

<template>
  <div class="carousel">
    <h1 class="carousel-title">Lista de produtos</h1>
    <div class="carousel-gallery">
      <ProductBox v-for="product in myProducts" v-bind:key="product">
        {{ product }}
      </ProductBox>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
  background-color: #ffffff;
}

.carousel-title {
  color: #000000;
  margin: 0;
}

.carousel-gallery {
  display: flex;
  padding: 30px;
  overflow: scroll;
  gap: 30px;
  width: 100%;
}

@media (min-width: 768px) {
  .carousel-gallery {
    justify-content: center;
  }
}
</style>
