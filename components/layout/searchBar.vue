<template>
  <div class="relative">
    <input
      class="
        min-w-[500px]
        pl-24
        py-2
        rounded-full
        focus:outline-none focus:bg-primarySoft
        text-primary
        border-none
      "
      placeholder="search "
    > 
    <Search class="text-primary absolute left-4 top-2"/>
  </div>
</template>

<script>
import { Search } from "lucide-vue";
export default {
  components: { Search },
};
</script>

<style>
</style>