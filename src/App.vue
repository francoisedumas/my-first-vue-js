<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to my first Vue.js app"/>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'app-header': Header,
    'app-footer': Footer,
    'app-ninja': Ninjas,
  },
  data(){
    return {
        ninjas: [
                {name: 'Ryu', speciality: 'Vue Components', show: false},
                {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
                {name: 'Hitoshi', speciality: 'Click Events', show: false},
                {name: 'Tango', speciality: 'Conditionals', show: false},
                {name: 'Kami', speciality: 'Webpack', show: false},
                {name: 'Yoshi', speciality: 'Data Diggin', show: false}
            ],
        title: "Vue Ninja"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
