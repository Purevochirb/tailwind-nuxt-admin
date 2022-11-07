<template>
  <input
    class="
      px-6
      text-xs
      hover:shadow-md hover:opacity-90
      focus:outline-double
      uppercase
      mx-1
    "
    :class="[inputClass, outlineColor, height, borderRadius]"
  />
</template>
 
<script>
export default {
  props: {
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "normal", //small, normal, large
    },
    rounded: {
      type: String,
      default: "small", //small, normal, large
    },
    variant: {
      type: String,
      default: "outlined", //solid, soft, plain, outlined
    },
  },
  computed: {
    inputClass() {
      const classList = [];
      switch (this.variant) {
        case "solid":
          classList.push(this.$getBackgroundColor(this.color));
          classList.push(this.$getDarkHoverColor(this.color));
          classList.push("text-white");
          break;
        case "soft":
          classList.push(this.$getBackgroundSoftColor(this.color));
          classList.push(this.$getHoverColor(this.color));
          classList.push(this.$getTextColor(this.color));
          classList.push("hover:text-white");
          break;
        case "plain":
          classList.push(this.$getSoftHoverColor(this.color));
          classList.push(this.$getTextColor(this.color));
          break;
        case "outlined":
          classList.push(this.$getTextColor(this.color));
          classList.push(this.$getSoftHoverColor(this.color));
          classList.push("border");
          classList.push(this.$getBorderColor(this.color));
          break;
      }
      classList.push(this.$getOutlineColor(this.color));
      return classList;
    },
    height() {
      return this.$getHeight(this.size);
    },
    borderRadius() {
      return this.$getBorderRadius(this.rounded);
    },
  },
};
</script>

<style>
</style>