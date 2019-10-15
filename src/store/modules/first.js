export default {
    state: {
        s: 1,
        b: 2
    },
    getters: {
        counter(state){
            return state.s
        },
        counter2(state) {
            return state.b
        }
    },
    mutations: {
        increaseCounter(state) {
            state.s++
        },
        decreaseCounter(state){
            state.s--
        }
    },
}

