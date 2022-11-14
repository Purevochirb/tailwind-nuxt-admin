<template>
  <div
    class="rounded-xl shadow-md border-primary bg-white min-h-[5rem] p-8"
  >
    <div class="flex justify-between">
      <p class="text-gray-500 text-base font-semibold">{{ title }}</p>
      <p class="text-primary text-xl font-thin">{{ count }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "text",
    },
  },
};
</script>

<style>
</style>