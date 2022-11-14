<template>
  <main class="flex w-full">
    <section class="border h-[40rem] w-[50%] flex items-center justify-center">
      <patro-button
        v-if="component === 'button'"
        :variant="variant"
        :size="size"
        :color="color"
        :disabled="disabled"
        :rounded="roundSize"
      >
        button
      </patro-button>
      <patro-input
        v-if="component === 'input'"
        :variant="variant"
        :size="size"
        :color="color"
        :disabled="disabled"
        :rounded="roundSize"
      >
        button
      </patro-input>
      <patro-checkbox
        v-if="component === 'checkbox'"
        :variant="variant"
        :size="size"
        :color="color"
        :disabled="disabled"
        :rounded="roundSize"
      >
        button
      </patro-checkbox>
    </section>
    <section class="border w-[50%] p-8">
      <div>
        <label>Component</label>
        <br />
        <select class="border" v-model="component">
          <template v-for="item in components">
            <option :key="item">
              {{ item }}
            </option>
          </template>
        </select>
      </div>
      <div>
        <label>Variant</label>
        <br />
        <select class="border" v-model="variant">
          <template v-for="item in variants">
            <option :key="item">
              {{ item }}
            </option>
          </template>
        </select>
      </div>
      <div>
        <label>Color</label>
        <br />
        <select class="border" v-model="color">
          <template v-for="item in colors">
            <option :key="item">
              {{ item }}
            </option>
          </template>
        </select>
      </div>
      <div>
        <label>Size</label>
        <br />
        <select class="border" v-model="size">
          <template v-for="item in sizes">
            <option :key="item">
              {{ item }}
            </option>
          </template>
        </select>
      </div>
      <div>
        <label>Border radius</label>
        <br />
        <select class="border" v-model="roundSize">
          <template v-for="item in roundSizes">
            <option :key="item">
              {{ item }}
            </option>
          </template>
        </select>
      </div>
      <!-- <input type="checkbox" v-model="disabled" /> -->
      <div class="mt-8">
        <input type="checkbox" v-model="detail" />
      </div>
      <transition name="grow">
        <div v-show="detail" class="h-40 w-40 bg-gray-500"></div>
      </transition>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      detail: false,
      component: "checkbox",
      components: ["button", "input", "checkbox"],
      disabled: false,
      variant: "solid",
      variants: ["soft", "solid", "outlined", "plain"],
      colors: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "regular",
      ],
      color: "primary",
      sizes: ["small", "normal", "large"],
      size: "normal",
      roundSizes: ["small", "normal", "large"],
      roundSize: "normal",
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  scale: 120%;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.grow-enter-active {
  animation: grow-in 0.2s;
}
.grow-leave-active {
  animation: grow-in 0.2s reverse;
}
@keyframes grow-in {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 100%;
  }
}
</style>