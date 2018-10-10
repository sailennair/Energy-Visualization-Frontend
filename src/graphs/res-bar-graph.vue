
<template>
<!-- This needs to be written in chartsjs as this current bar graph library is not the greatest -->
  <div>
    <!-- <resIntro></resIntro> -->
  <div class='chart'>

    <!-- import font awesome for legend icons -->
    <link href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' rel='stylesheet'>
    <chart-axis :data='chartData'></chart-axis>
  </div>
  </div>
</template>

<script>
  import { svgArea, svgLine, svgScatter , svgBar} from 'd2b'
  import { ChartAxis } from 'vue-d2b'
  

  export default {
    data () {
      return {
        chartData: {
          sets: [
            {
              generators: [svgScatter()],
              graphs: [
                {
                  label: 'Catered',
                  values: [
                    {x: 2015, y: 2.38},
                    {x: 2016, y: 2.44},
                    {x: 2017, y: 2.42}
                  ]
                },
                {
                  label: 'Self Catering',
                  values: [
                     {x: 2015, y: 3.1},
                    {x: 2016, y: 2.89},
                    {x: 2017, y: 3.02}
                  ]
                }
              ]
            }
          ]
        }
      }
    },

    components: {
      ChartAxis
    }
  }
</script>

<style scoped>
  .chart{
    width: 100%;
    height: 500px;
    background-color: gray
  }
</style>