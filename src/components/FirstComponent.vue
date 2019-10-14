<template>
    <div>
        <p>{{ counter }}</p>
        <button>increase counter</button>
    </div>
</template>


<script>
export default {
   computed: {
       counter() {
           return this.$store.state.s
       }
   }
}
</script>