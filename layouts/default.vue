<template>
  <main class="flex h-screen w-screen overflow-x-hidden bg-primary">
    <layout-sidebar :sidebarWidth="sidebarWidth" />
    <div class="w-full h-full md:ml-64 lg:ml-64 xl:ml-64 z-10">
      <layout-header />
      <!-- <div style="height: 2500px"> -->
      <!-- <patro-select :options="themeModes" /> -->
      <Transition name="fades">
        <Nuxt />
      </Transition>
      <!-- </div> -->
    </div>
    <!-- <div class="absolute bottom-0 w-[100vw]">
        <vue-wavify fill="var(--color-primary)" />
    </div> -->
  </main>
</template>

<script>
import VueWavify from "vue-wavify";

export default {
  components: { VueWavify },

  props: {
    sidebarWidth: {
      type: Number,
      default: 13,
    },
    headerHeight: {
      type: Number,
      default: 4,
    },
  },
  data() {
    return {
      themeModes: [{ name: "light" }, { name: "semi dark" }, { name: "dark" }],
      themeColors: [{ name: "purple" }, { name: "green" }, { name: "blue" }],
      sidebarModes: ["hidden", "open", "mini"],
      headerTypes: [{ name: "sticky" }, { name: "not-sticky" }],
    };
  },
};
</script>

<style>
.fades-enter-active,
.fades-leave-active {
  transition: opacity 0.5s ease;
}

.fades-enter-from,
.fades-leave-to {
  opacity: 0;
}
</style>