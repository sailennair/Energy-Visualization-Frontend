<template>
 <div>
     <h1>D3 Js test graph</h1>
<div class="container">
    <div class="row">
      <div class="col-md-12">
        <date-picker v-model="date"   @dp-change="setstartdate" :config="options"></date-picker>
      </div>
    </div>
  </div>
 

  </div>
</template>

 

<script>
 import 'bootstrap/dist/css/bootstrap.css';
  
  // Import this component
  import datePicker from 'vue-bootstrap-datetimepicker';
  
  // Import date picker css
  import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

export default {
    data () {
      return {
        startdate:'2014-01-01',
        date: new Date(),
        options: {
          format: 'YYYY-MM-DD',
          useCurrent: false,
        }       
      }
    },
    components: {
      datePicker
    },
    methods:
    {
        setstartdate(startdate){
            this.startdate = moment(startdate).format('YYYY-MM-DD');
            console.log(startdate.date)
            console.log(this.startdate)
        }


    }
}

</script>
