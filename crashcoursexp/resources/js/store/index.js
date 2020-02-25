import Vuex from 'vuex';
import Vue from 'vue';
import CurrentUser from "./modules/CurrentUser";

Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    modules: {
        CurrentUser,
    }
});
