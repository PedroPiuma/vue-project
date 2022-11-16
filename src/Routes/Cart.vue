<script setup>
import CartItem from "../components/CartItem.vue"
// const data = [
//   {
//     title: "Caveira",
//     subtitle: "Caveira de enfeita para festa",
//     price: "237,00",
//     imageLink: "https://purepng.com/public/uploads/large/purepng.com-skullskullhuman-skullskeleton-skullbrain-holder-1421526970832t69bt.png",
//     quantity: 1,
//   },
//   {
//     title: "Abóbora",
//     subtitle: "Abóbora de enfeita para festa",
//     price: "410,00",
//     imageLink: "https://purepng.com/public/uploads/large/purepng.com-halloween-pumpkinpumpkinvegetablefoodroundedfruitpumpkinshalloween-pumpkin-1701527313858uxpyi.png",
//     quantity: 2,
//   },
// ]
// localStorage.setItem("productsToSell-01", JSON.stringify(data))

const storage = JSON.parse(localStorage.getItem("productsToSell2022")) || false

const goTo = (path = "/") => (window.location.pathname = path)
</script>

<template>
  <div v-if="!storage" class="empty-cart">
    <h1 class="empty-cart-title">VOCÊ NÃO TEM ITENS NO SEU PEDIDO.</h1>
    <button class="empty-cart-btn" @click="goTo()">CONTINUAR COMPRANDO</button>
  </div>
  <div v-if="storage" class="cart">
    <CartItem v-for="item in storage" :product="item" :key="item.id" />
  </div>
</template>

<style scoped>
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background-color: #f8f8f8;
  padding: 40px;
}

.empty-cart-title,
.empty-cart-btn {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande", "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
  text-align: center;
}

.empty-cart-title {
  color: #202020;
  font-size: 27px;
  letter-spacing: -1px;
}
.empty-cart-btn {
  font-size: 14px;
  padding: 15px 25px;
  width: fit-content;
  background-color: #202020;
  color: #ffffff;
  border: 1px solid #ffffff;
  transition: background 0.2s ease-in, border 0.2s ease-in, color 0.2s ease-in;
  cursor: pointer;
}
.empty-cart-btn:hover {
  background-color: #ffffff;
  color: #202020;
  border: 1px solid #202020;
}

.cart {
  background-color: #ffffff;
}
</style>
