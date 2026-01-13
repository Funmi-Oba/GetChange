<template lang="">
  <div class="p-6">
    <p>Counter</p>
    <button @click="decrement" class="p-2 mb-3 mr-5 bg-amber-500">-</button>
    <!-- <p>
      {{ $store.state.count }}
    </p> -->
    <button @click="increment" class="p-2 mt-3 bg-amber-500">+</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    increment() {
      this.$store.commit('increment', 10)
    },
    decrement() {
      this.$store.commit('decrement')
    },
  },
}
</script>
<style lang=""></style>
