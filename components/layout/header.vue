<template>
  <header
    class="
      h-16
      sticky
      top-6
      flex
      items-center
      px-8
      shadow-lg
      justify-between
      rounded-3xl
      mt-6
      ml-6
      mr-6
      bg-slate-200
      z-20
    "
  >
    <div class="flex items-center">
      <p class="text-primary text-[1rem] mr-4">app > dashboard</p>
      <layout-searchBar/>
    </div>
    <div class="flex">
      <button
        class="
          h-8
          w-8
          flex
          items-center
          justify-center
          rounded-full
          shadow-md
          mr-2
          hover:bg-primarySoft
          relative
        "
      >
        <Bell class="text-primary" size="16" />
        <div class="w-4 h-4 bg-danger rounded-full absolute top-0 right-0 text-[8px]"> 
          5
        </div>
      </button>
      <button
        class="
          h-8
          w-8
          flex
          items-center
          justify-center
          rounded-full
          shadow-md
          hover:bg-primarySoft
          mr-2
        "
      >
        <Send class="text-primary" size="16" />
      </button>
      <div class="flex items-center">
        <button
          class="
            h-10
            w-10
            flex
            items-center
            justify-center
            rounded-full
            overflow-hidden
            bg-gray-500
            mr-2
          "
        >
          <img
            class=""
            src="https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png"
          />
        </button>
        <div>
          <p class="text-sm text-primary">Purev-Ochir</p>
          <p class="text-xs text-gray-400">Frontend developer</p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { Send, Bell, Search } from "lucide-vue";

export default {
  components: { Send, Bell, Search },
};
</script>

<style>
</style>