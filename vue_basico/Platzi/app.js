/****************COMPONENTE PROPIO****************/
Vue.component('coinDetail',{
  props: ['coin'],
  data () {
    return {
      showPrices: false,
      value: 0
    }
  },
  computed: {
    title () {
      return this.coin.name + ' - ' + this.coin.symbol
    },
    convertedValue () {
      if (!this.value) {
        return 0
      }
      return this.value / this.coin.price
    }
  },
  created () {
    console.log('Created Hijo......')
  },
  mounted () {
    console.log('Mounted Hijo......')
  },
  methods: {
    toggleShowprices () {
      this.showPrices  = !this.showPrices
      this.$emit('change-color',this.showPrices ? 'FF96C8' : '3D3D')
    }
  },
  template: `
    <div>
      <img
        @mouseover="toggleShowprices"
        @mouseout="toggleShowprices"
        v-bind:src="coin.img"
        v-bind:alt="coin.name" width="100" height="100">
      <h1>
        {{ title }}
        <span v-if="coin.changePercent> 0">👌</span>
        <span v-else>Perdidas</span>
        <span v-show="coin.changePercent > 0">👌</span>
        <span v-show="coin.changePercent < 0">Perdidas</span>
        <span @click="toggleShowprices()">ver precios</span>
      </h1>
      <div>
        <input type="number" v-model="value">
        <span>
          {{ convertedValue }}
        </span>
      </div>
      <slot name="text"></slot>
      <slot name="link"></slot>
      <ul v-show="showPrices">
          <li
          class="uppercase"
          v-bind:class="{orange: p.value === coin.price, red: p.value < coin.price, green: p.value > coin.price}"
          v-for="(p, i) in coin.pricesWithDays">
              {{ i }}) {{ p.day }} - {{ p.value }}
          </li>
      </ul>
    </div>`
})
/****************MAIN DE LA APLICACION****************/
new Vue({
  el: '#app',
  data () {
    return {
      value: 0,
      color: 'f4f4f4',
      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        changePercent: 10,
        price: 8400,
        pricesWithDays: [
          { day: 'Lunes', value: 8400 },
          { day: 'Martes', value: 7900 },
          { day: 'Miercoles', value: 8200 },
          { day: 'Jueves', value: 9000 },
          { day: 'Viernes', value: 9400 },
          { day: 'Sabado', value: 10000 },
          { day: 'Domingo', value: 10200 },
        ],
      },
      showPrices: false,
    }
  },
  computed: {
      title () {
          return this.btc.name + ' - ' + this.btc.symbol
      },
      convertedValue () {
        if (!this.value) {
          return 0
        }
        return this.value / this.btc.price
      }
  },
  watch: {
      showPrices (newValue, oldValue) {
          console.log(newValue, oldValue)
      }
  },
  created () {
    console.log('Created......')
  },
  mounted () {
    console.log('Mounted......')
  },
  methods: {
      toggleShowprices () {
          this.showPrices  = !this.showPrices
          this.color = this.color.split('').reverse().join('')
      },
      updateColor (color) {
        this.color = color || this.color.split('').reverse().join('')
      }
  }
})