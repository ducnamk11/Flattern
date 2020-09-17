//support Moment js
import Vue from 'vue'
import moment from 'moment'
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format(" Do MMM YYYY")
})
