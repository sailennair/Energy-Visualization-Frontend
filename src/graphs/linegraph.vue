

<template>
  <div>
    <canvas id="planet-chart" width="100" height="100"></canvas>
   
   <slot></slot>
  </div>
</template>

<script>
import Chart from 'chart.js';
import planetChartData from './chart-data.js';


export default {
  methods:{
  createChart(chartId, chartData) {

    console.log(chartData)
    var s1 = {
  label: 's1',
  borderColor: 'blue',
  data: [
    { x: '2016-01-01T00:00:00', y: 100 },
    { x: '2016-01-01T04:00:00', y: 101 },
  ]
};

var s2 = {
  label: 's2',
  borderColor: 'red',
  data: [
    { x: "2016-01-01T03:30:00", y: 90 },
    { x: "2016-01-01T04:00:00", y: 105 },
  ]
};

    const ctx = document.getElementById(chartId);

    const myChart = new Chart(ctx, {
      type: 'line',
      data: { datasets: [s1, s2] },
     options: {
      scales: {
      xAxes: [{
        type: 'time'
      }]
    }
  }}
  )
  }
  },


  data() {
  return {
    planetChartData: planetChartData,
  }
},
mounted() {
  this.createChart('planet-chart', this.planetChartData);
}

}
</script>
