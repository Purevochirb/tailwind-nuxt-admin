<template>
  <div class="relative">
    <div class="flex items-center mr-4">
      <span
        :class="[
          inputClass,
          height,
          borderRadius,
          'absolute left-0 z-0 ',
          { 'opacity-70': disabled },
        ]"
      >
        <div
          class="
            rounded-full
            absolute
            ease-in-out
            duration-100
            shadow-2xl
            scale-90
          "
          :class="[checkmarkClass, checkmark, checkmarkTranslate]"
        />
      </span>
      <input
        id="red-checkbox"
        v-model="modelValue"
        type="checkbox"
        :disabled="disabled"
        :class="[
          inputClass,
          borderRadius,
          height,
          'z-10 opacity-0',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        ]"
      />
      <label
        for="red-checkbox"
        class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >Red
      </label>
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
    label: {
      type: String,
      default: "normal", //small, normal, large
    },
    color: {
      type: String,
      default: "primary",
    },
    size: {
      type: String,
      default: "normal", //small, normal, large
    },
    variant: {
      type: String,
      default: "outlined", //solid, soft
    },
    value: {
      type: Boolean,
      default: () => false,
    },
    disabled: {
      type: Boolean,
      default: () => false,
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
          if (!this.modelValue) {
            classList.push("bg-gray-400");
          } else {
            classList.push(this.$getBackgroundColor(this.color));
          }
          break;
        case "soft":
          if (this.modelValue) {
            classList.push(this.$getBackgroundSoftColor(this.color));
          } else {
            classList.push("bg-gray-300");
          }
          break;
      }
      return classList;
    },
    checkmarkClass() {
      const classList = [];
      switch (this.variant) {
        case "solid":
          // classList.push(this.$getDarkHoverColor(this.color));
          classList.push("bg-white");
          break;
        case "soft":
          if (this.modelValue) {
            classList.push(this.$getBackgroundColor(this.color));
          } else {
            classList.push("bg-white");
          }
          break;
      }
      return classList;
    },
    height() {
      switch (this.size) {
        case "small":
          return "h-3 w-6";
        case "normal":
          return "h-4 w-8";
        case "large":
          return "h-6 w-12";
      }
    },
    checkmark() {
      switch (this.size) {
        case "small":
          return "h-3 w-3";
        case "normal":
          return "h-4 w-4";
        case "large":
          return "h-6 w-6";
      }
    },
    checkmarkTranslate() {
      if (1 === 1 && this.modelValue) return "translate-x-[100%]";
      if (this.modelValue)
        switch (this.size) {
          case "small":
            return "translate-x-[100%]";
          case "normal":
            return "translate-x-6";
          case "large":
            return "translate-x-11";
        }
    },
    textClass() {
      const classList = [];
      switch (this.variant) {
        case "solid":
          classList.push("text-white");
          break;
        case "soft":
        case "outlined":
          classList.push(this.$getTextColor(this.color));
          break;
      }
      classList.push("flex justify-center items-center");
      classList.push(this.$getOutlineColor(this.color));
      return classList;
    },
    borderRadius() {
      return "rounded-full";
    },
  },
};
</script>

<style>
</style>