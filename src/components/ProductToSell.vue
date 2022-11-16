<script setup>
import { ref } from "@vue/reactivity"
import { watch, watchEffect } from "@vue/runtime-core"
import ButtonAddBag from "./ButtonAddBag.vue"
import IconHearth from "./icons/IconHearth.vue"
import PopUpItemAction from "./PopUpItemAction.vue"
const { imageLink, title, subtitle, price, id } = defineProps(["imageLink", "title", "subtitle", "price", "id"])

const clicked = ref("")
watch(clicked, () => setTimeout(() => (clicked.value = false), 3000))

const addItemToCart = () => {
  const storage = localStorage.productsToSell2022 || false
  if (storage) {
    const oldStorage = JSON.parse(storage)
    const sameId = oldStorage.find((el) => el.id === id) || false

    if (sameId) {
      const newStorage = oldStorage.map((el) => {
        el.qtd = el.id === id ? (el.qtd += 1) : el.qtd
        return el
      })
      localStorage.setItem("productsToSell2022", JSON.stringify(newStorage))
    } else if (!sameId) {
      oldStorage.push({ id, imageLink, title, subtitle, price, qtd: 1 })
      localStorage.setItem("productsToSell2022", JSON.stringify(oldStorage))
    }
  } else {
    const data = [{ id, imageLink, title, subtitle, price, qtd: 1 }]
    localStorage.setItem("productsToSell2022", JSON.stringify(data))
  }
}
</script>

<template>
  <PopUpItemAction v-if="clicked" :item="title" :price="price" />
  <div class="product-sell-box">
    <div class="product-box">
      <IconHearth />
      <img class="product" v-bind:src="imageLink" alt="" />
    </div>
    <div class="product-info">
      <p class="product-info-title">{{ title }}</p>
      <span class="product-info-subtitle">{{ subtitle }}</span>
      <div class="product-info-footer">
        <span class="product-info-price">R$ {{ price }}</span>
        <ButtonAddBag
          @click="
            () => {
              addItemToCart()
              clicked = true
            }
          "
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-sell-box {
  display: flex;
  flex-direction: column;
  width: 185px;
  height: 350px;
  align-items: center;
  background-color: #ffffff;
}

.product-info {
  background-color: #ffffff;
  padding: 20px 10px 0;
}

.product-box {
  display: flex;
  justify-content: center;
  background-color: #f8f8f8;
  width: 180px;
  height: 180px;
  padding: 20px 0;
}

.product {
  max-width: 150px;
  max-height: 150px;
  align-self: center;
}

.product-info-title,
.product-info-subtitle,
.product-info-price {
  font-size: 13px;
}

.product-info-title,
.product-info-price {
  font-weight: bold;
  color: #141414;
}

.product-info-title {
  margin-bottom: 5px;
}
.product-info-subtitle {
  display: inline-block;
  color: #999999;
  line-height: 17px;
}
.product-info-price {
  display: inline-block;
}

.product-info-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 15px;
}
</style>
