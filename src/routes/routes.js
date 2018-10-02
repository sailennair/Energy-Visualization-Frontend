import graph from '../graphs/linegraph.vue'
import graphdata from '../graphs/graphdata.vue'
import piegraph from '../graphs/piegraph.vue'

export default[
    {path:'/graph',
     component: graph },
     {path: '/graphdata',
    component: graphdata},
    {path:'/pie',
component:piegraph}
]