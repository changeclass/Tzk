<template>
  <div id="app">
    <my-addition></my-addition>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import AdditionVue from './components/Addition.vue'
import SubtractionVue from './components/Subtraction.vue'

export default {
  data () {
    return {}
  },
  components: {
    'my-addition': AdditionVue,
    'my-subtraction': SubtractionVue
  }

}
</script>

<style>
</style>
