<template>
  <div class="jumbotron">
    <span class="display-4">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: "TextBox",
  props: {
    text: String
  }
};
</script>
