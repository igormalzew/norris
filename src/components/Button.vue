<template>
  <button @click="handleClick" class="btn" :class="{ 'btn-disabled': isDisabled }">
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    isDisabled: Boolean
  },
  methods: {
    handleClick: function() {
      if (!this.isDisabled) {
        this.$emit("click");
      }
    }
  }
};
</script>

<style scoped>
.btn {
  cursor: pointer;
  width: 12em;
  height: 4em;
  border-radius: 0.2em;
  background-color: #d23232;
  color: #fff;
  cursor: pointer;
}

.btn-disabled {
  background-color: gray;
}
</style>
