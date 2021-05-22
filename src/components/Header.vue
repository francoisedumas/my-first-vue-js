<template>
  <header>
    <h1 v-on:click="changeTitle">{{ title }}</h1>
    <nav>
      <ul>
        <li><router-link to="/show" exact>See all Blogs</router-link></li>
        <li><router-link to="/list" exact>List of Blogs</router-link></li>
        <li><router-link to="/add" exact>Add Blog</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { bus } from '../main';
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
    }
  },
  methods: {
    changeTitle: function(){
      // this.$emit('changeTitle', 'Vue Wizards');
      this.title = 'Vue Wizards';
      bus.$emit('titleChanged', 'Vue Wizards');
    }
  }
}
</script>

<style scoped>
  header{
      background: lightgreen;
      padding: 10px;
  }
  h1{
      color: #222;
      text-align: center;
  }
  ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
  }
  li{
      display: inline-block;
      margin: 0 10px;
  }
  a{
      color: #fff;
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 10px;
  }
  nav{
      background: #444;
      padding: 14px 0;
      margin-bottom: 40px;
  }
  .router-link-active{
      background: #eee;
      color: #444;
  }
</style>
