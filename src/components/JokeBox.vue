<template>
  <div class="joke-box">
    <h2>{{ title }}</h2>
    <img :src="iconUrl" alt>
  </div>
</template>

<script>
export default {
  name: "JokeBox",
  props: {
    title: String,
    iconUrl: String
  }
};
</script>

<style scoped>
.joke-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
