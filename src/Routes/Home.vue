<script setup>
import KnowMore from "../components/KnowMore.vue"
import Carousel from "../components/Carousel.vue"
import ProductToSell from "../components/ProductToSell.vue"
import FooterInfo from "../components/FooterInfo.vue"
import KnowMoreItems from "../Resource/KnowMoreItems.js"
import ProductsToSell from "../Resource/ProductsToSell.js"
</script>

<template>
  <KnowMore
    title="Golden Rubik 24k"
    imageLink="https://images.unsplash.com/photo-1597783708119-9db9b5035b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
  />
  <Carousel />
  <KnowMore v-for="data in KnowMoreItems" :title="data.title" :imageLink="data.imageLink" :key="data.id" />
  <div id="productsToSell">
    <h2 class="productsToSell-title">BEST SELLERS</h2>
    <div id="productsToSell-gallery">
      <ProductToSell
        v-for="product in ProductsToSell"
        :key="product.id"
        :title="product.title"
        :subtitle="product.subtitle"
        :price="product.price"
        :imageLink="product.imageLink"
        :id="product.id"
      />
    </div>
  </div>
</template>

<style scoped>
#productsToSell {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
}

.productsToSell-title {
  color: #141414;
  font-weight: bold;
  font-size: 27px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 30px 0 10px;
}

#productsToSell-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
