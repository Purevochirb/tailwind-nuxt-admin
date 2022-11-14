<template>
  <patro-paper>
    <section>
      <ui-buttons />
    </section>
    <section class="mt-8">
      <ui-inputs />
    </section>
    <section>
      <patro-button>hello</patro-button>
      {{ stak }}
      <patro-input v-model="stak"></patro-input>
      {{ checkme }}
      <patro-checkbox v-model="checkme"></patro-checkbox>
    </section>
  </patro-paper>
</template>

<script>
export default {
  data() {
    return {
      checkme: true,
      stak: '1'
    };
  },
};
</script>

<style>
</style>