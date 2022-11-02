<template>
  <main class="flex h-screen w-screen bg-slate-100 overflow-x-hidden">
    <layout-sidebar :sidebarWidth="sidebarWidth" />
    <div class="bg-green-200 w-full h-full md:ml-52 lg:ml-52 xl:ml-52">
      <header class="bg-primary h-16 sticky top-0">header</header>
      <div class="bg-white">
        <div style="height: 2500px">
          <custom-select :options="themeModes" />
          <Nuxt />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
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
</style>