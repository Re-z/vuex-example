<template>
    <div>
        <p>{{ counter }}</p>
        <p>{{ counter2 }}</p>
        <button @click="increaseCounter">increase counter</button>
        <button @click="decreaseCounter ">decrease counter</button>
    </div>
</template>


<script>
import { mapGetters } from 'vuex';
export default {

   computed: mapGetters(['counter','counter2']),
   
   methods: {
       increaseCounter(){
           this.$store.commit('increaseCounter')
       },
       decreaseCounter() {
           this.$store.commit('decreaseCounter')
       }
   },
   
}
</script>