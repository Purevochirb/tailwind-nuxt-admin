<template>
  <main class="flex w-full">
    <section class="border h-[40rem] w-[50%] flex items-center justify-center">
      <custom-button
        v-if="component === 'button'"
        :variant="variant"
        :size="size"
        :color="color"
        :disabled="disabled"
        :rounded="roundSize"
      >
        button
      </custom-button>
      <custom-input
        v-if="component === 'input'"
        :variant="variant"
        :size="size"
        :color="color"
        :disabled="disabled"
        :rounded="roundSize"
      >
        button
      </custom-input>
    </section>
    <section class="border w-[50%] p-8">
      <select class="border" v-model="component">
        <template v-for="item in components">
          <option :key="item">
            {{ item }}
          </option>
        </template>
      </select>
      <select class="border" v-model="variant">
        <template v-for="item in variants">
          <option :key="item">
            {{ item }}
          </option>
        </template>
      </select>
      <select class="border" v-model="color">
        <template v-for="item in colors">
          <option :key="item">
            {{ item }}
          </option>
        </template>
      </select>
      <select class="border" v-model="size">
        <template v-for="item in sizes">
          <option :key="item">
            {{ item }}
          </option>
        </template>
      </select>
      <select class="border" v-model="roundSize">
        <template v-for="item in roundSizes">
          <option :key="item">
            {{ item }}
          </option>
        </template>
      </select>
      <input type="checkbox" v-model="disabled" />
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      component: "button",
      components: ["button", "input"],
      disabled: false,
      variant: "solid",
      variants: ["soft", "solid", "outlined", "plain"],
      colors: ["primary", "secondary", "success", "warning", "danger"],
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
</style>