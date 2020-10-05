<template>
    <div>
        <h1> {{ msg | upper }} </h1>
        <tablePru></tablePru>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
import tablePru from '@/components/tablePru'
export default {
  name: 'primerComponente',
  components: {
    tablePru
  },
  data () {
    return {
      msg: 'tabla de prueba'
    }
  }
}
</script>
