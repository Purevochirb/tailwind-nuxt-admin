<template>
  <div class="relative">
    <div class="flex items-center mr-4">
      <span :class="[inputClass, height, borderRadius, 'absolute left-0 z-0 cursor-pointer']">
        <v-icon
          v-show="modelValue"
          name="check"
          :scale="checkmark"
          :class="textClass"
        />
      </span>
      <input
        id="red-checkbox"
        v-model="modelValue"
        type="checkbox"
        :class="[inputClass, borderRadius, height, 'z-10 opacity-0 cursor-pointer']"
      />
      <label
        for="red-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Red</label
      >
    </div>
  </div>
</template>
 
<script>
export default {
  props: {
    placeHolder: {
      type: String,
      default: "placeholder",
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
      default: "small", //small, normal, large
    },
    variant: {
      type: String,
      default: "outlined", //solid, soft, plain, outlined
    },
    value: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      check: false,
    };
  },
  computed: {
    modelValue: {
      get: function () {
        return this.value;
      },
      set: function (val) {
        this.$emit("input", val);
      },
    },
    inputClass() {
      const classList = [];
      switch (this.variant) {
        case "solid":
          classList.push(this.$getBackgroundColor(this.color));
          // classList.push(this.$getDarkHoverColor(this.color));
          classList.push("text-white");
          break;
        case "soft":
          classList.push(this.$getBackgroundSoftColor(this.color));
          // classList.push(this.$getHoverColor(this.color));
          classList.push(this.$getTextColor(this.color));
          // classList.push("hover:text-white");
          break;
        case "plain":
          classList.push(this.$getSoftHoverColor(this.color));
          // classList.push(this.$getTextColor(this.color));
          break;
        case "outlined":
          classList.push(this.$getTextColor(this.color));
          // classList.push(this.$getSoftHoverColor(this.color));
          classList.push("border");
          classList.push(this.$getBorderColor(this.color));
          break;
      }
      classList.push("flex justify-center items-center");
      classList.push(this.$getOutlineColor(this.color));
      return classList;
    },
    height() {
      switch (this.size) {
        case "small":
          return "h-3 w-3";
        case "normal":
          return "h-4 w-4";
        case "large":
          return "h-6 w-6";
      }
    },
    checkmark() {
      switch (this.size) {
        case "small":
          return "0.5";
        case "normal":
          return "0.7";
        case "large":
          return "1";
      }
    },
    textClass() {
      const classList = [];
      switch (this.variant) {
        case "solid":
          classList.push("text-white");
          break;
        case "soft":
        case "plain":
        case "outlined":
          classList.push(this.$getTextColor(this.color));
          break;
      }
      classList.push("flex justify-center items-center");
      classList.push(this.$getOutlineColor(this.color));
      return classList;
    },
    borderRadius() {
      switch (this.rounded) {
        case "small":
          return "rounded-sm";
        case "normal":
          return "rounded-md";
        case "large":
          return "rounded-full";
      }
    },
  },
};
</script>

<style>
</style>