<!-- <script setup></script> -->

<template>
  <div class="product-box-item">
    <p class="product-box-item-text"><slot></slot></p>
  </div>
</template>

<style scoped>
.product-box-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #ffffff;
  background-color: #f0f0f0;
  border-radius: 100%;
  outline: 1px solid #000000;
  height: 100px;
}

.product-box-item-text {
  margin: 0;
  color: #000000;
  font-size: 13px;
  text-align: center;
  width: 90px;
}
</style>
