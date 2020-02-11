
require('./bootstrap');

window.Vue = require('vue');

import App from './App.vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import {routes} from './routes';
import VModal from 'vue-js-modal';
import VueSession from 'vue-session';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(VModal);
Vue.use(VueSession);

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

const app = new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
