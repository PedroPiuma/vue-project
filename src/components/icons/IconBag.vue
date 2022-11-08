<!-- This icon is from <https://github.com/Templarian/MaterialDesign>, distributed under Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0) license-->
<template>
  <div class="bag-box">
    <img class="icon-bag" src="../../Image/icons8-sacola-de-compras-50.png" alt="" />
    <span class="bag-counter">0</span>
  </div>
</template>

<style scoped>
.icon-bag {
  height: 27px;
  width: 27px;
}

.bag-box {
  display: inline-block;
  margin-right: 10px;
  cursor: pointer;
}
.bag-box:hover {
  box-shadow: 0 0 10px 2px #81c784;
  border-radius: 100%;
}
.bag-counter {
  display: block;
  background-color: #202020;
  color: #ffffff;
  width: 15px;
  height: 15px;
  font-size: 10px;
  text-align: center;
  border-radius: 100%;
  position: absolute;
  right: 0;
  top: 0;
}
</style>
