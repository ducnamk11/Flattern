require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import {routes} from './routes';
import AdminMain from "./components/admin/AdminMaster";
import PublicMaster from "./components/public/PublicMaster";

//EDITOR SUPPORT
import 'v-markdown-editor/dist/v-markdown-editor.css';
import Vue from 'vue'
import Editor from 'v-markdown-editor'
Vue.use(Editor);

//VUEX
import Vuex from 'vuex'
Vue.use(Vuex)
import storeData from "./store/index"
const store = new Vuex.Store(
    storeData
)
//support Moment js
import {filter} from "./filter"

// Vform
import {AlertError, Form, HasError} from 'vform'
Vue.use(VueRouter);
Vue.component('admin-main', AdminMain);
Vue.component('home-main', PublicMaster);
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
