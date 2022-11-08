<template>
  <button
    :disabled="disabled"
    class="
      px-6
      shadow-sm
      focus:outline-double
      mx-1
      ease-in-out
      duration-100
      font-semibold
      disabled:cursor-not-allowed disabled:opacity-50
    "
    :class="[buttonClass, height, borderRadius, textClass]"
  >
    {{ bgColor }}
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
    },
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
      default: "normal", //small, normal, large
    },
    variant: {
      type: String,
      default: "solid", //plain, solid, soft, outlined,
    },
  },
  computed: {
    buttonClass() {
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
    textClass() {
      return this.$getTextHeight(this.size);
    },
  },
};
</script>

<style>
.button:hover {
  filter: brightness(20%);
}
</style>