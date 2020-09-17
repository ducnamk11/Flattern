require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import {routes} from './routes';

import AdminMain from "./components/admin/AdminMaster";
//VUEX
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)
 //support Moment js
import moment from 'moment'
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YY")
})

// Vform
import {AlertError, Form, HasError} from 'vform'
Vue.use(VueRouter);
Vue.component('admin-main', AdminMain);
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

// SWEET ALERT
import Swal from 'sweetalert2'
window.Swal = Swal
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});
window.Toast = Toast

 //end // SWEET ALERT


const router = new VueRouter({
    routes,
    mode: 'hash'
});

const app = new Vue({
    el: '#app',
    store,
    router
});
