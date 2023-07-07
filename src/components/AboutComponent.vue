<template src="../templates/about.html"></template>

<script>
import presetData from '../assets/presetData'

export default {
  name: "AboutComponent",
  data() {
    return {
      type: this.$route.params.type,
      presetData: presetData,
    }
  }
}
</script>