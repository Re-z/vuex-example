import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
// import {store} from './store/index.js'

Vue.use(Vuex)

import FirstComp from './components/FirstComponent'

Vue.component('app-first-component', FirstComp)

let store = new Vuex.Store({
  state: {
      s: 'vuex value'
  } 
  
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
