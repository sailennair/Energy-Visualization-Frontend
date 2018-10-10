<template>
    <div>
        <resIntro></resIntro>
        <carousel :perPage="1">
            <slide>
                <resBar></resBar>
            </slide>

            <slide>
                <h1>This is a nice test</h1>
            </slide>
             <slide>
                <h1>This is a nice test 2.0</h1>
            </slide>


        </carousel>

    </div>
</template>


<script>
import {Carousel,Slide} from 'vue-carousel';
import resBar from './res-bar-graph.vue';
import resIntro from '../Introductions/residence-comparison-intro.vue'
export default {
components:{

    Carousel, 
    Slide,
    'resBar': resBar,
    'resIntro': resIntro
}    
}
</script>
