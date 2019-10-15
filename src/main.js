import Vue from 'vue'
import App from './App.vue'
import {store} from './store/index.js'

// Vue.use(Vuex)

import FirstComp from './components/FirstComponent'

Vue.component('app-first-component', FirstComp)



new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
