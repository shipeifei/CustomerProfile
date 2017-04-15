import Vue from 'vue'
import Vuex from 'vuex'
//import * as actions from './actions'
//import * as getters from './getters'
import indexController from './modules/indexController'

Vue.use(Vuex);
Vue.config.debug = true;

export default new Vuex.Store({
    strict: true,
    modules: {
        indexController,
    }
})
