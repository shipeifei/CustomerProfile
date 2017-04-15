require('babel-polyfill')
require('babel-register')
import Vue from 'vue'
import VueResource from 'vue-resource'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import localforage from 'localforage'
import router from './router'
import './assets/css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.use(ElementUI)
import App from './App.vue'

Vue.use(VueResource);

// this registers `store.state.route`
sync(store, router)

localforage.config({
    driver: localforage.LOCALSTORAGE, // Force WebSQL; same as using setDriver()
    name: '68kejian.com',
    version: 1.0,
    size: 4980736, // Size of database, in bytes. WebSQL-only for now.
    storeName: 'alphanumeric', // Should be alphanumeric, with underscores.
    description: 'customer profile.'
})

const app = new Vue({
    router,
    store,
    ...App
}).$mount('#app')
