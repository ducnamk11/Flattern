require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
import {routes} from './routes';
import AdminMain from "./components/admin/AdminMaster";

Vue.use(VueRouter);
Vue.component('admin-main', AdminMain);
const router = new VueRouter({
    routes,
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});
