<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlogs.vue'
import listBlog from './components/listBlogs.vue'
import header from './components/header.vue'
import singleBlog from './components/singleBlog.vue'


export default {
  data () {
    return {
    }
  },
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog,
    'app-header': header,
    'single-blog': singleBlog



  },
}
</script>

<style>

body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
