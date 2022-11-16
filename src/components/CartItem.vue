<script setup>
import IconCloserBlack from "../components/icons/IconCloserBlack.vue"
import IconLess from "../components/icons/IconLess.vue"
import IconPlus from "../components/icons/IconPlus.vue"
const { product } = defineProps(["product"])
const { imageLink, price, qtd = 0, subtitle, title, id } = product

const removeItem = () => {
  const storage = JSON.parse(localStorage["productsToSell-01"])
  console.log(storage)
}
</script>

<template>
  <div class="cart-item">
    <img class="cart-item-img" v-bind:src="imageLink" :alt="title" :title="title" />
    <div class="cart-item-mid">
      <p class="cart-item-mid-title">{{ title }} {{ id }}</p>
      <div class="cart-item-mid-qtd">
        <IconLess />
        <span class="cart-item-mid-qtd-value">{{ qtd }}</span>
        <IconPlus />
      </div>
    </div>
    <div class="cart-item-end">
      <IconCloserBlack @click="removeItem" />
      <span class="cart-item-end-price">R$ {{ price }}</span>
    </div>
  </div>
</template>

<style scoped>
.cart-item {
  color: #202020;
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.cart-item-img {
  width: 100px;
}

.cart-item-mid,
.cart-item-end {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.cart-item-mid {
  align-items: left;
}

.cart-item-mid-title,
.cart-item-end-price {
  font-weight: bold;
}

.cart-item-mid-qtd {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.cart-item-mid-qtd-value {
  border: 1px solid #939393;
  width: 27px;
  height: 27px;
  text-align: center;
  font-weight: bold;
}

.cart-item-end {
  align-items: end;
}
</style>
