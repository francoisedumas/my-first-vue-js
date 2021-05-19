<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="ninja in ninjas" :key="ninja">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      ninjas: ["Yoshi", "Mario", "Toshi"]
    }
  }
}
</script>

<style>

</style>
