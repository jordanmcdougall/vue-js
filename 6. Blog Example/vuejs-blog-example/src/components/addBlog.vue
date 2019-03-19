<template>
  <div id="add-blog">
    <h2>Add a new Blog</h2>
    <form v-if="!submitted">
        <label>Blog Title</label>
        <input type="text" v-model.lazy="blog.title" required>
        <label>Blog Content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Ninjas</label>
            <input type="checkbox" value="ninjas" v-model="blog.categories"/>
            <label>Wizzards</label>
            <input type="checkbox" value="wizzards" v-model="blog.categories"/>
            <label>Warriors</label>
            <input type="checkbox" value="warriors" v-model="blog.categories"/>
            <label>Snipers</label>
            <input type="checkbox" value="snipers" v-model="blog.categories"/>
            <label>Author:</label>
            <select v-model="blog.author">
                <option v-for="author in authors" v-bind:key="author">{{ author }}</option>
            </select>
        </div>
        <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted" id="sumbitted">
        <h3>Awesome...Thanks for submitting your post!</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{blog.title }}</p>
        <p>Blog Content:</p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories</p>
        <ul>
            <li v-for="category in blog.categories" v-bind:key="category">{{ category }}</li>
        </ul>
        <p>Author:</p>
        <p>{{ blog.author}}</p>
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
        submitted: false
    }
  },
  methods:{
      post: function(){
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
              title: this.blog.title,
              body: this.blog.content,
              userId: 1
          }).then(function(data){
              console.log(data);
          }).catch(e => {
                console.log(e);
                this.submitted = true;
              console.log("S: " + this.submitted);

        });
      }
  }
}
</script>

<style scoped>

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display:block;
    margin: 20px 0 10px;
}
input[type=text], textarea{
    display: block;
    width: 100%;
    padding:8px;
}
#preview{
    padding:10px 20px;
    border:1px dotted #ccc;
    margin:30px 0;
}
h3{
    margin-top:10px
}
#checkboxes input{

    display: inline-block;
    margin-right: 10px;

}
#checkboxes label{
    display:inline-block;
}

</style>
