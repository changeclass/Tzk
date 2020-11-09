<template>
  <div>
    <h3>当前最新的Count值为：{{ $store.state.count }}</h3>
    <button @click="add">+1</button>
    <button @click="addN(3)">+3</button>
    <button @click="AsyncAdd">异步+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    add () {
      this.$store.commit('add')
    },
    addN (step) {
      this.$store.commit('addN', step)
    },
    AsyncAdd () {
      this.$store.dispatch('AsyncAdd')
    }
  }
}
</script>
