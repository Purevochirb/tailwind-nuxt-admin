<template>
  <div class="inline-flex rounded-none">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ButtonGroup",
};
</script>
<style scoped>
button {
  border-radius: 0;
}
button:first-child {
  border-radius: 10px 0 0 10px;
}
button:last-child {
  border-radius: 0 10px 10px 0;
}
button:not(:last-child) {
  border-right: 0;
}
</style>