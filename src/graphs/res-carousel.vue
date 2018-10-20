<template>
    <div class ="pie-chart">
        <resIntro></resIntro>
        <carousel :perPage="1" 
              paginationColor="black"
              paginationActiveColor="red"
              paginationSize=15
        >
            <slide>
                <resBar></resBar>
            </slide>

            <slide>
                <div class="container">
                <div class="row">
                    <div class="col-md-12">
                <h1 class ="junction-intro">Lets look a bit deeper into one of the self catering residences...Junction</h1>
                </div>
                </div>         
                </div> 
            </slide>
             <slide>
                <junctionBlocks></junctionBlocks>
            </slide>
            <!-- <slide>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                <h1 class ="junction-intro">Deeper into Junction...</h1>
                </div>
                </div>         
                </div> 
            </slide> -->


        </carousel>

    </div>
</template>


<script>
import {Carousel,Slide} from 'vue-carousel';
import resBar from './res-bar-graph.vue';
import resIntro from '../Introductions/residence-comparison-intro.vue'
import junctionBlocks from './junction-blocks.vue';
export default {
components:{

    Carousel, 
    Slide,
    'resBar': resBar,
    'resIntro': resIntro,
    'junctionBlocks': junctionBlocks
}    
}
</script>
