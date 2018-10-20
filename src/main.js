import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
//import header1 from './views/header.vue'
import VueRouter from 'vue-router'
import Routes from './routes/routes.js'
import VueResource from 'vue-resource'
import vSelect from 'vue-select'
import datePicker from 'vue-bootstrap-datetimepicker'
import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';



Vue.use(datePicker);
Vue.use(VueResource)
Vue.use(BootstrapVue) 
Vue.use(VueRouter)

Vue.component('v-select', vSelect)
//Vue.component('graphdata',graphdata)


const router = new VueRouter({
 routes: Routes
});

new Vue({
  el: '#app',
 
  render: h => h(App),
 router: router
})



// new Vue({
//   el: '#graph',
//   render:h => h(graph)
// })