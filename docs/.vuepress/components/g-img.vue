<template>
  <div align="center">
    <img v-bind="binds" :src="imgUrl">
  </div>
</template>

<script>
export default {
  name: 'GImg',
  props: {
    src: String,
    name: String,
    h: {
      type: String,
      default: "250",
    },
    w: String,
  },
  computed: {
    binds () {
      const ret = {}
      if (this.h) ret.height = this.h
      if (this.w) ret.width = this.w
      return ret
    },
    imgUrl () {
      return this.src ? this.src : 'https://gcore.jsdelivr.net/gh/GuoLiBin6/images/tech-blog/' + this.name
    }
  }
}
</script>
