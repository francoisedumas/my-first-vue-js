<template>
  <div id="app">
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to my first Vue.js app"/>
    <app-blog></app-blog>
    <show-blogs></show-blogs>
    <app-ninja v-bind:ninjas="ninjas"></app-ninja>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'
import addBlog from './components/addBlog.vue'
import showBlogs from './components/showBlogs.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    'app-header': Header,
    'app-footer': Footer,
    'app-ninja': Ninjas,
    'app-blog': addBlog,
    'show-blogs': showBlogs
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
  },
  methods: {
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
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
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>
