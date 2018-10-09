<template>
<div>
    <sankeyIntro></sankeyIntro>
  
  <div class="chart">
        <br>
    <br>
    <chart-sankey :data = 'chartData' :config = 'chartConfig'></chart-sankey>
    <!-- <br> -->
    <!-- <br> -->
  </div>
   
  </div>
</template>
 
<script>
  import { ChartSankey } from 'vue-d2b'
  import sankeyIntro from '../Introductions/sankey-intro.vue'
  
  export default {
    data () {
      return {
        // The chart data varies from chart to chart. To see what type of data
        // to provide each chart type head over to the d2bjs.org docs.
        chartData: {
          nodes: [
            {name: 'Solar Power'},
            {name: 'Eskom'},
            {name: 'Resturants'},
            {name: 'Residences'},
            {name: 'Libraries'},
            {name: 'Offices'},
            {name: 'Laboratories'},
            {name: 'Entrance Security'},
            {name: 'Food Stalls'},
            {name: 'Total Energy'},
            

          ],
          links: [

            {source: 'Solar Power', target: 'Total Energy', value: 7},
            {source: 'Eskom', target: 'Total Energy' , value: 82},
            {source: 'Total Energy', target: 'Libraries', value: 2},
            {source: 'Total Energy', target: 'Resturants', value: 5},
            {source: 'Total Energy', target: 'Offices', value: 10},
            {source: 'Total Energy', target: 'Laboratories', value: 20},
            {source: 'Total Energy', target: 'Residences', value: 22},
            {source: 'Total Energy', target: 'Entrance Security', value: 12},
            {source: 'Total Energy', target: 'Food Stalls', value: 16},
            // {source: 'Node C', target: 'Node D', value: 2},
            // {source: 'Node C', target: 'Node E', value: 2},
            // {source: 'Node D', target: 'Node E', value: 4}
          ]
        },
 
        // There are many configuration options for each chart type, checkout
        // the d2bjs.org docs for more information.
        chartConfig (chart) {
          chart
            // returns the d2b svg sankey generator
            .sankey()
            // returns the d3 sankey generator
            .sankey()
            // now configure the d3 sankey generator through method chaining
            .nodePadding(50)

            chart 
            .sankey()
            .nodeDraggableY(true)
        }
      }
    },
 
    components: {
      ChartSankey,
      'sankeyIntro': sankeyIntro
    }
  }
</script> 
 
<style scoped>
  .chart{
    height: 800px;
    background-color: lightgrey;
  }
</style> 