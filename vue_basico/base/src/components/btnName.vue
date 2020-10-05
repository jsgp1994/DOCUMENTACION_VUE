<template>
    <button type="button" class="btn btn-success" @click="buttonClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'btnName',
  methods: {
    buttonClick () {
      this.$emit('showClick')
    }
  }
}
</script>
