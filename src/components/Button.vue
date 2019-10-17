<template>
  <button
    type="button"
    @click="handleClick"
    class="btn container"
    :class="className"
    :disabled="isDisabled">
      {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
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
