
require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import VModal from 'vue-js-modal';
import store from './store'
import Toasted from 'vue-toasted';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.use(Toasted, { duration: 5000 });


const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    store: store,
    el: '#app',
    router: router,
    render: h => h(App),
});
