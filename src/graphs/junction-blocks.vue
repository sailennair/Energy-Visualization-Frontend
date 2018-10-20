<template>
  <div>
  <div >
    <JunctionBlockBar class="chart"></JunctionBlockBar>
  </div>
  </div>
</template>



<script>

import JunctionBlockBar from '../Components/junction-block-bar-graph'
export default {
  components:{
    'JunctionBlockBar': JunctionBlockBar
  }
}
</script>



<style scoped>
  .chart{
    width: 100%;
    height: 800px;
   
  }
</style>