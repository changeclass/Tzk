<template>
  <div>
    <h3>当前最新的Count值为：{{ count }}</h3>
    <button @click="sub">-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['sub'])
  }
}

</script>

<style scoped>
</style>
