
<template>
  <div>
  <div >
    <barChartExample class="chart"></barChartExample>
  </div>
  </div>
</template>



<script>

import barChartExample from '../Components/res-bar-graph'
export default {
  components:{
    'barChartExample': barChartExample
  }
}
</script>



<style scoped>
  .chart{
    width: 100%;
    height: 800px;
   
  }
</style>