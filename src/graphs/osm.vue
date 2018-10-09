<template>
<div>
    <mapintro></mapintro>
    <div class="osm-style">
         <br>
              <br>
        <div class ="container">
            <div class="col-md-12">
              <div id="map" class="map" r>
              </div>
              <br>
              <br>
            </div>
       </div>
    </div>
</div>


</template>


<script>
import L from 'leaflet'
import mapintro from '../Introductions/map-intro.vue'


export default {
  data(){ return{
  map: null,
  tileLayer: null,
  layers: [
    {
        id:0,
        name:"boundaries",
        active: true,
        features:[
            {
                id: 1,
                name: 'test',
                type: 'polygon',
                coords:[
                    [-26.21887, 28.02767],
                [-26.29747, 28.02857],
                [-26.18667, 28.02547],

                ],
            },

        ],


    },{
      id:1,
      name: "pins",
      active: true,
      features:[
          {
              id:1,
              name:'test2',
              type: 'polygon',
                coords:[
                    [-26.18887, 28.02767],
                [-26.18777, 28.02857],
                [-26.18667, 28.02547],

                ],

          }
      ]
    }
  ],
    }},
    components:{
        'mapintro': mapintro
    },
 
   
     mounted(){
        this.initMap();
    },
    
    methods:{


         initMap() {
                 this.map = L.map('map').setView([-26.18887, 28.02767], 17)
                 this.map.scrollWheelZoom.disable()
  
             this.tileLayer =  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        });
                var polygon = L.polygon([
      [-26.18887, 28.02767],
      [-26.18637, 28.02857],
      [-26.18667, 28.02547]
    ]).addTo(this.map)
    polygon.bindPopup('Chamber of Mines: \n\n Energy Consumption:120kW/Day')

                L.geoJson(this.layers,{
                style: function(feature) {
                    switch (feature.name) {
                        case 'boundaries': return {color: "#ff0000"};
                        case 'test1':   return {color: "#0000ff"};
                    }
                }
            }).addTo(this.map)

                this.tileLayer.addTo(this.map);


                        }
         }
   
}
</script>
