/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { createInertiaApp } from '@inertiajs/inertia-vue'
var vueAwesomeCountdown = require('vue-awesome-countdown').default
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueCompositionAPI)
Vue.use(vueAwesomeCountdown)
Vue.use(ElementUI)

createInertiaApp({
  resolve: name => require(`./Pages/${name}`),
  setup({ el, App, props }) {
    new Vue({
      render: h => h(App, props),
    }).$mount(el)
  },
})