

import {Bar} from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {

      datacollection: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Parna Janda',
            backgroundColor:  '#27AE60',
            data: [1.3, 2, 1.6, 2.1, 2.2, 1.5, 1.6, 2, 2.4, 2.2, 2.1, 1.8]
          },
          {
            label: 'Shosholoza',
            backgroundColor:  '#3498DB',
            data: [1.6, 2.2, 1.8, 1.8, 2, 1.7, 1.9, 2.2, 2.4, 2.1, 2, 2.1]
          },
          {
            label: 'Amagumbi',
            backgroundColor:  '#FFC300',
            data: [1.2, 2.1, 1.8, 1.8, 2.4, 1.7, 1.5, 2, 2.2, 2.3, 2, 1.9]
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
            text: 'Blocks within Junction',
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