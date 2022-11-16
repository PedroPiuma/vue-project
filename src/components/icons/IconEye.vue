<script setup>
const { showPassword } = defineProps(["showPassword"])
</script>

<template>
  <div class="eye-box">
    <img class="eye-box-icon" src="../../Image/on-eye.png" alt="" v-if="showPassword" />
    <img class="eye-box-icon" src="../../Image/eye-invisible.png" alt="" v-if="!showPassword" />
  </div>
</template>

<style scoped>
@keyframes showPassword {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 100%;
  }
}
.eye-box {
  display: inline-block;
  height: 29px;
  width: 29px;
  cursor: pointer;
  margin-bottom: 10px;
  border-bottom: 1px solid #b2b2b2;
}

.eye-box-icon {
  width: 24px;
  height: 24px;
  vertical-align: middle;
  animation-name: showPassword;
  animation-duration: 0.2s;
}
</style>
