<template>
  <div v-theme:coulmn="'narrow'" id="show-blog">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="search-blogs">
      <div v-for="b in filteredBlogs" v-bind:key="b" class="single-blog">
            <router-link v-bind:to="'/blog/'+ b.id"><h1 v-rainbow>{{b.title | to-uppercase}}</h1></router-link>
            <p>{{b.body | snippet}}</p>
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin'
export default {
  data () {
    return {
        blogs:[],
        search:''
    }
  },
  methods:{
     
  },
  //lifecyle hook
  created(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
          console.log(data);
          //Only want first 10
          this.blogs = data.body.slice(0,10);
          console.log(data.id);

      }).catch(function(e){
          console.log(e);
      });
  },
 
  //Example of local filter
  filters:{
    toUppercase(value) {
    return value.toUpperCase();
    }  
  },
  //Example of Local directive
  directive:{
      'rainbow': {
        bind(el,binding,vnode){
        //Generate Random Hexcode
        el.style.color = "#" + Math.random().toString().slice(2,8);
  }
      }
  },
  mixins:[searchMixin]
}
</script>

<style scoped>

#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;

}
</style>
