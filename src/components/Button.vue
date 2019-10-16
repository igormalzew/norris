<template>
  <button 
    type="button"
    @click="handleClick" 
    class="btn btn-main"
    :class="className" 
    :disabled="isDisabled">
      {{ title }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    title: String,
    isDisabled: Boolean,
    className: String
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
  .btn-main {
    width: 100%
  }
</style>
