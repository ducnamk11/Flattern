require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
});
