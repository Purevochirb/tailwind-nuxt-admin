<template>
  <div class="bg-slate-100 rounded-3xl m-6 p-4 shadow-xl relative min-h-[calc(100vh-120px)] ">
    <slot />
  </div>
</template>

<script>
import VueWavify from "vue-wavify";

export default {
  components: { VueWavify },
};
</script>

<style>
</style>