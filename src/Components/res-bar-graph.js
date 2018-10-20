

import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {

      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Self Catering',
            backgroundColor:  'red',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
          },
          {
            label: 'Catered',
            backgroundColor:  'orange',
            data: [32, 14, 10, 37, 10, 30, 31, 70, 37, 15, 10, 9]
          }
        ]
      },
     options:{ 
         scales: {
        yAxes: [{
           ticks: {
              beginAtZero: true
           },
           scaleLabel:{
               display: true,
               labelString: 'kWh / Person',
               fontSize: 28  
           }
        }],
        xAxes:[{
            scaleLabel:{
                display: true,
                labelString: 'Month',
                fontSize: 28
            }
        }]},
        title:{
            display: true,
            text: 'Self Catering Residences versus Catered Residences',
            padding: 25,
            fontSize: 28
        },
        responsive: true,
        maintainAspectRatio: false
        
     },
    
   
  }},
  mounted () {
    
    this.renderChart(this.datacollection,this.options)
  }
}