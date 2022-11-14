<template>
  <Bar :chart-data="chartData" :chart-options="chartOptions" />
</template>

<script>

export default {
  name: 'BarChart',
  props: {
    chartData: {
        type: Object,
        required: true
      },
    chartOptions: {
      type: Object,
      default: () => {}
    }
  }
}
</script>