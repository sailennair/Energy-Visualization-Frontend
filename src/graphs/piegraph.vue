<template>
<div>
    <h1>Pie Graph Example</h1>
    
    <p>Pick the start date</p>
    <datepicker  @selected="setstartdate"></datepicker>
    <p>Pick the end date</p>
    <datepicker  @selected="setenddate"></datepicker>
<div>
 <v-select v-model="selected" :options="options"></v-select>  
 <button v-on:click.prevent="changelocation">ChangeLocation</button>
 <button v-on:click.prevent="get()">Get graph</button>
</div >
            <div >
    <canvas id='pie-chart'></canvas>
            </div>
</div>
</template>

 

<script>
import Datepicker from 'vuejs-datepicker';
import moment from 'moment'

  
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
        Datepicker
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
         var query = 'http://127.0.0.1:5000/range/pi/' + this.selected.label +'/'+this.startdate +'/'+this.enddate;
            console.log(query)
            this.$http.get(query).then((data)=>{
                console.log(data)
              // this.graphdata.push(data.body)
                for (var i = 0; i < data.body.length; i++){
                   this.graphdata.push(data.body[i])
                   this.labels.push(data.body[i].x)
                   this.data1.push(data.body[i].y)
                   console.log(data.body[i].x)
                  // console.log(data.body[i].y)
                    //this.graphTime.push((data.body[i].t))
                    //this.graphKw.push((data.body[i].y))
                    
                }

            })
            this.createChart('pie-chart')//, labels,data1)
           

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
              backgroundColor: '#36a2eb',
              hoverBackgroundColor: '#ffce56',
                data                  : this.data1
            }]
                        };
        
            var ctx = document.getElementById(chartId).getContext("2d");
            
        
             this.mytempchart = new Chart(ctx,{
                type:'pie',
                data: tempdata,
                options:{
                    
                    responsive : true,
                    legend: {
                        display: false,
                        
                    }
                                    }
                                
                                
                            })
            // mytempchart.reset()
            //  this.updateChart(mytempchart, tempdata)

        }},
    
    
   mounted() {
   this.createChart('pie-chart');
 }
}
</script>
