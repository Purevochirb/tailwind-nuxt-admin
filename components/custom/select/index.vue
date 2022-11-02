<template>
  <div>
    select
    <popper
      trigger="clickToOpen"
      :options="{
        placement: 'bottom',
        modifiers: { offset: { offset: '0,1px' } },
      }"
    >
      <div id="popcont" class="popper">
        <ul
          class="bg-white shadow-md border border-gray-100 text-left py-2"
          style="
            opacity: 1;
            transform: none;
            min-width: 120px;
            transition: opacity 251ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
              transform 167ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            top: 522px;
            left: 279px;
            transform-origin: 60px 0px;
          "
        >
          <template v-for="(option, index) in options">
            <li :key="index" class="cursor-pointer hover:bg-gray-100 px-1">
              {{ option.name }}
            </li>
          </template>
        </ul>
      </div>
      <custom-input id="wtf" slot="reference" />
    </popper>
  </div>
</template>
<script>
import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
export default {
  props: {
    options: {
      type: Array,
      default: [],
    },
  },
  components: {
    popper: Popper,
  },
  mounted() {
    const el = document.getElementById("wtf");
    const el2 = document.getElementById("popcont");
    console.log("el", el, el2);
    el2.style.width = el.offsetWidth + "px";
  },
};
</script>
<style scoped>
.popper {
  background-color: transparent !important;
  box-shadow: none !important;
  border-radius: 0 0 0 0 !important;
  border: none;
}
</style>