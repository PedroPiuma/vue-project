<script setup>
const props = defineProps(["imageLink", "title"])
const linkBg = `url(${props.imageLink})`
</script>

<template>
  <div
    id="bg-KnowMore"
    v-bind:style="{
      backgroundImage: `${linkBg}`,
    }"
  >
    <h1 class="KnowMore-title">{{ props.title }}</h1>
    <div class="bg-KnowMore-btns">
      <a href="http://" target="_blank" rel="noopener noreferrer">SAIBA MAIS</a>
      <a href="http://" target="_blank" rel="noopener noreferrer">COMPRAR</a>
    </div>
  </div>
</template>

<style scoped>
#bg-KnowMore {
  background-position: center;
  background-size: cover;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

#bg-KnowMore .KnowMore-title {
  margin-top: 20px;
  color: #ebebeb;
  padding: 10px;
  text-align: center;
  background-color: #141414b9;
}

#bg-KnowMore .bg-KnowMore-btns {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

#bg-KnowMore a {
  border: 1px solid rgb(180, 180, 180);
  padding: 5px 10px;
  border-radius: 25px;
  color: rgb(193, 189, 189);
  background-color: #141414;
}
</style>
