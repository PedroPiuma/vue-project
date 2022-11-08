<script setup>
import ButtonAddBag from "./ButtonAddBag.vue"
import IconHearth from "./icons/IconHearth.vue"
const props = defineProps(["imageLink", "title", "subtitle", "price"])
</script>

<template>
  <div class="product-sell-box">
    <div class="product-box">
      <IconHearth />
      <img class="product" v-bind:src="props.imageLink" alt="" />
    </div>
    <div class="product-info">
      <p class="product-info-title">{{ props.title }}</p>
      <span class="product-info-subtitle">{{ props.subtitle }}</span>
      <div class="product-info-footer">
        <span class="product-info-price">R$ {{ props.price }}</span>
        <ButtonAddBag />
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
