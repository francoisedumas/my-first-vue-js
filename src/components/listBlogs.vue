<template>
    <div v-theme:column="'narrow'" id="show-blogs">
        <h1>All Blog Articles</h1>
        <input type="text" v-model="search" placeholder="search blogs">
        <div v-for="blog in filteredBlogs" v-bind:key="blog" class="single-blog">
            <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase }}</h2></router-link>
        </div>
    </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {  
  data() {
    return {
       blogs: [],
       search: ''
    }
  },
  created() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
          this.blogs = data.body.slice(0,10);
      })
  },
  computed: {
  },
  filters: {
    //   'to-uppercase': function(value){
    toUppercase(value){    
          return value.toUpperCase();
      }
  },
  directives: {
    'rainbow': {
      bind(el){
        el.style.color = "#" + Math.random().toString().slice(2,8)
    }}
  },
  mixins: [searchMixin]
}
</script>

<style scoped>
   #show-blogs{
       max-width: 500px;
       margin: 0 auto;
   }
   .single-blog{
       padding: 20px;
       margin: 20px 0;
       box-sizing: border-box;
       background: #eee;
   }
</style>
