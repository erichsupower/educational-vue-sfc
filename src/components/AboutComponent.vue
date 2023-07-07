<template>
  <a :href="'/'">Home</a>
  <h1>About {{ type }}</h1>
  <p>{{ presetData[type] }}</p>

  <a v-if="type !== 'user'" :href="'/about/user'">About User</a><br>
  <a v-if="type !== 'group'" :href="'/about/group'">About Group</a><br>
  <a v-if="type !== 'news'" :href="'/about/news'">About News</a><br>
</template>

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