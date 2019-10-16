<template>
  <div class="jumbotron joke-box">
    <span class="display-6">{{ title }}</span>
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
  
}
</style>
