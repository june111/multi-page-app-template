<template>
  <div>
    Test
  </div>
</template>
<script>

export default {
  name: 'Content',
  data () {
    return {}
  },
  created () {},
  mounted: function () {
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
    })
  },
  methods: {},
  watch: {
    '$route': function () {}
  }
}

</script>
