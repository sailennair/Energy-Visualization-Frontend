
<template>
  <div id="app">
    <!-- <router-view></router-view> -->
    <header1></header1>
    <welcomescreen></welcomescreen>
    <osm></osm>
    <piegraph></piegraph>
    <linegraph></linegraph>
    <!-- <d3jsgraph></d3jsgraph> -->
    <sankeydiagram></sankeydiagram>
    <resBarGraph></resBarGraph>
  
    
  </div>
</template>
<style>
  @import './styles/styles.css';
</style>
<script>
import header1 from './views/header.vue'
import piegraph from './graphs/piegraph.vue'
import linegraph from './graphs/graphdata.vue'
import d3jsgraph from './graphs/d3js.vue'
import tip1 from './energy-tips/tip1.vue'
import osm from './graphs/osm.vue'
import welcomescreen from './graphs/welcome.vue'
import sankeydiagram from './graphs/sankeyChart.vue'
import resBarGraph from './graphs/res-bar-graph.vue'

export default {

  components:{
    'header1': header1,
     'piegraph': piegraph,
     'linegraph': linegraph,
     'd3jsgraph' : d3jsgraph,
     'tip1': tip1,
     'osm': osm,
     'welcomescreen': welcomescreen,
     'sankeydiagram' : sankeydiagram,
     'resBarGraph': resBarGraph
  },

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
