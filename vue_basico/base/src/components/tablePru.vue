<template>
  <div>
    <b-table striped hover :items="items">
    </b-table>
    <btn-name @showClick="homeRedirect()">Home</btn-name>
  </div>
</template>

<script>
import btnName from '@/components/btnName.vue'
export default {
  name: 'tablePru',
  components: {
    btnName
  },
  data () {
    return {
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  },
  mounted () {
  },
  methods: {
    homeRedirect () {
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
