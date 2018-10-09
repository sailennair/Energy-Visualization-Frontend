<template>
<div>
    <single-line-intro></single-line-intro>
   <div class="single-line-chart">
     <br/>
    <br/>
   <div class="container">
    <div class="row">
      <div class="col-md-3">
          <h3 class="datepick" >Pick the start date</h3>
          <datepicker  @selected="setstartdate" id="pie-start"></datepicker>
          </div>
          <div class="col-md-3">
         <h3 class="datepick" >Pick the end date</h3>
        <datepicker  @selected="setenddate" id="pie-end"></datepicker>
      </div>
    </div>
  </div>

<br/>
 <div class="container">
    <div class="row">
      <div class="col-md-4">
          <h3 class="datepick" >Pick the location</h3>
       <v-select v-model="selected" :options="options" id="pie-location"></v-select> 
   <br/>
  <button type="buton" class="btn btn-dark" v-on:click.prevent="get()">Get graph</button>
      </div>
    </div>
 </div> 
 <!-- <button v-on:click.prevent="changelocation">ChangeLocation</button> -->
<br/>

            <!-- <div style="background-color: 	#E0E0E0"> -->
    <canvas id='api-chart'></canvas>
            <!-- </div> -->
             <br/>
    <br/>
</div>
</div>
</template>

 

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'
import singleLineIntro from '../Introductions/single-line-intro.vue'
  
export default {
  
    data(){
        return{
            graphdata: [],
            graphTime:[],
            graphKw: [],
            labels: ['2016-01-01T00:00:00', '2016-01-01T06:00:00',],
            data1:[10, 20],
            dataTest: "",
            startdate:'2014-01-01',
            enddate:'2014-01-02',
            mytempchart:null,
            location: '',
            options: [      
      {id: 1, label: 'Zesti_Lemonz'}
    ],
    selected: {id: 1, label: 'Zesti_Lemonz'}
            
        }
    },
   
    components:{
        Datepicker,
        'singleLineIntro': singleLineIntro
    },
    methods:{
        changelocation(){
            
            console.log(this.selected.label)
        },
        setstartdate(startdate){
            this.startdate = moment(startdate).format('YYYY-MM-DD');
            console.log("Start date is "+ this.startdate)
        },
        setenddate(enddate){
            this.enddate = moment(enddate).format('YYYY-MM-DD');
            console.log("End date is " + this.enddate)
        },
        get(){
            //var labels = [];
           // var data1 = [];
           this.labels =[]
           this.data1 = []
            var query = 'http://127.0.0.1:5000/range/' + this.selected.label +'/'+this.startdate +'/'+this.enddate;
            console.log(query)
            this.$http.get(query).then((data)=>{
                console.log(data)
              // this.graphdata.push(data.body)
                for (var i = 0; i < data.body.length; i++){
                   this.graphdata.push(data.body[i])
                   this.labels.push(data.body[i].x)
                   this.data1.push(data.body[i].y)
                 //  console.log(data.body[i].x)
                  // console.log(data.body[i].y)
                    //this.graphTime.push((data.body[i].t))
                    //this.graphKw.push((data.body[i].y))
                    
                }

            })
            this.createChart('api-chart')//, labels,data1)
           

        },

        createChart(chartId){//, labelstest, datatest) {
            //chartId = 'api-chart';
            
        //  console.log(labelstest)
         console.log(this.mytempchart )
          if(this.mytempchart !=null){
        this.mytempchart .destroy();
    }
            
            var tempdata = {
                labels:this.labels,
                datasets : [{
                fillColor             : "rgba(151,187,205,0.2)",
                strokeColor           : "rgba(151,187,205,1)",
                pointColor            : "rgba(151,187,205,1)",
                pointStrokeColor      : "#fff",
                pointHighlightFill    : "#fff",
                pointHighlightStroke  : "rgba(151,187,205,1)",
                data                  : this.data1
            }]
                        };
        
            var ctx = document.getElementById(chartId).getContext("2d");
            
        
             this.mytempchart = new Chart(ctx,{
                type:'line',
                data: tempdata,
                options:{
                    scales:{
                        xAxes:[{
                            type: 'time',
                            time: {
                                displayFormats:{
                                    day: 'MMM D'
                                }
                            },
                            scaleLabel:{
                                display:true,
                                labelString:'Date',
                                fontSize: 20
                                 }
                        }],
                        yAxes: [{
                            scaleLabel:{
                                display:true,
                                labelString:'kW',
                                fontSize: 20
                                 }
                        }]
                        
                    },
                    responsive : true,
                    title :{
                        display: true,
                        text: 'Graph showing energy usage for a range of time',
                        padding: 25,
                        fontSize: 20
                    },
                    legend: {
                        display : false
                    }
                },
                
            })
            // mytempchart.reset()
            // this.updateChart(mytempchart, tempdata)

        }},
    
    
   mounted() {
   this.createChart('api-chart');
 }
}
</script>
