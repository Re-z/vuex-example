import Vue from 'vue'
import Vuex from 'vuex'
import first from './modules/first'


Vue.use(Vuex)

export let store = new Vuex.Store({
    
    
    modules: {
        first
    }

    
})