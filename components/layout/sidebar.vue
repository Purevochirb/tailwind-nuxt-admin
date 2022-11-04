<template>
  <aside class="z-10 fixed h-full w-52 bg-slate-900 shadow-xl border-r border-r-gray-400">
    <header class="h-16 bg-primary px-4 flex items-center justify-center">
      <p class="text-white text-sm"> 
        Welcome {{ userName }}!
      </p>
    </header>
    <ul class="text-white">
      <template v-for="(menu, index) in menus">
        <nuxt-link :key="index" :to="menu.path">
          <li class="cursor-pointer py-2 px-8 hover:bg-slate-600">
            {{ menu.name }}
          </li>
        </nuxt-link>
      </template>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    menus: {
      type: String,
      default: [
        { name: "Dashboard", path: "dashboard" },
        { name: "Uicomponents", path: "components" },
        { name: "Users", path: "" },
        { name: "Dashboard", path: "" },
      ],
    },
    userName: {
      default: 'B.Purev-Ochir'
    }
  },
};
</script>

<style>
</style>