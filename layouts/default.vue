<template>
  <main class="flex h-screen w-screen bg-slate-100">
    <aside class="fixed h-full bg-white border-r border-gray-400" :style="`width: ${sidebarWidth}rem`">
      sidebar
    </aside>
    <div
      class="bg-green-200 w-full h-full"
      :style="`margin-left: ${sidebarWidth}rem`"
    >
      <header class="bg-primary" :style="`height: ${headerHeight}rem`">
        header
      </header>
      <div
        class="bg-white"
        :style="`height: calc(100vh - ${headerHeight}rem)`"
      >
        <Nuxt />
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
};
</script>

<style>
</style>