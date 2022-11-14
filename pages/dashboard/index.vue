<template>
  <patro-paper>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-9 grid grid-cols-12 gap-4">
        <div class="col-span-3">
          <patro-count-card title="User" :count="1123"> 1 </patro-count-card>
        </div>
        <div class="col-span-3">
          <patro-count-card title="Visits" :count="2415"> 1 </patro-count-card>
        </div>
        <div class="col-span-3">
          <patro-count-card title="Total clicks" :count="1899">
            1
          </patro-count-card>
        </div>
        <div class="col-span-3">
          <patro-count-card title="items" :count="711"> 1 </patro-count-card>
        </div>
      </div>
      <div class="col-span-3">
        <patro-count-card title="items" :count="711"> 1 </patro-count-card>
      </div>
      <div class="col-span-4">
        <patro-card>
          <dashboard-chart />
        </patro-card>
      </div>
    </div>
  </patro-paper>
</template>

<script>
export default {};
</script>

<style>
</style>