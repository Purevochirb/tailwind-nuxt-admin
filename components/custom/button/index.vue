<template>
  <button
    class="
      px-6
      text-xs
      shadow-sm
      hover:shadow-md hover:opacity-90
      focus:outline-double
      uppercase
      mx-1
    "
    :class="[
      variant === 'full' ? bgColor : '',
      outlineColor,
      height,
      borderRadius,
      variant === 'outlined'
        ? `border ${borderColor} ${textColor}`
        : 'text-white',
    ]"
  >
    <slot />
  </button>
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
      default: "full", //full, outlined
    },
  },
  computed: {
    bgColor() {
      return this.$getBackgroundColor(this.color);
    },
    textColor() {
      return this.$getTextColor(this.color);
    },
    outlineColor() {
      return this.$getOutlineColor(this.color);
    },
    height() {
      return this.$getHeight(this.size);
    },
    borderRadius() {
      return this.$getBorderRadius(this.rounded);
    },
    borderColor() {
      return this.$getBorderColor(this.color);
    },
  },
};
</script>

<style>
</style>