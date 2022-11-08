<!-- This icon is from <https://github.com/Templarian/MaterialDesign>, distributed under Apache 2.0 (https://www.apache.org/licenses/LICENSE-2.0) license-->
<template>
  <div class="icon-profile-box">
    <img class="icon-profile-img" src="../../Image/icons8-usuário-24.png" alt="" />
  </div>
</template>

<style scoped>
.icon-profile-box {
  display: inline-block;
  cursor: pointer;
}
.icon-profile-img {
  height: 27px;
  widows: 27px;
}
.icon-profile-img:hover {
  box-shadow: 0 0 10px 2px #81c784;
  border-radius: 100%;
}

.icon-profile-box:hover::after {
  position: absolute;
  content: "Entrar / Criar Conta";
  background-color: #ffffff;
  left: -100px;
  top: 45px;
  width: 150px;
  text-align: center;
  font-size: 12px;
  padding: 3px 20px;
  color: #666666;
}
</style>
