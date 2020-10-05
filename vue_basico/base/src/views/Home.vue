
<template>
    <div>
        <h1> {{ msg | upper }} </h1>
        <router-link :to="{name: 'tablePru', params: { id: 15} }"><button type="button" class="btn btn-primary">Tabla de prueba</button></router-link>
        <bounce-loader :loading="isloading" :color="'#68d391'" :size="100" />
    </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'ESTE ES EL HOME',
      isloading: true
    }
  },
  created () {
  }
}
</script>
