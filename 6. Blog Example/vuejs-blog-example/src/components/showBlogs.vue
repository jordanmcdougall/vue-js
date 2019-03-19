<template>
  <div id="show-blog">
      <h1>All Blog Articles</h1>
      <div v-for="b in blogs" v-bind:key="b" class="single-blog">
            <h1 v-rainbow>{{b.title}}</h1>
            <p>{{b.body}}</p>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        blog:{
            title: "",
            content:"",
            categories:[],
            author:"",
        },
        authors:['Jordan', 'Lauren','Lola', 'Skye'],
        submitted: false,
        blogs:[]
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

      }).catch(function(e){
          console.log(e);
      });

  }
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
