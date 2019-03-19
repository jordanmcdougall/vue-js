<template>
  <div>
    <!--<add-blog></add-blog>-->
    <show-blog></show-blog>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue'
import showBlog from './components/showBlogs.vue'


export default {
  data () {
    return {
    }
  },
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog

  },
}
</script>

<style>

body{
  margin: 0;
  font-family: 'Nunito SemiBold';
}

</style>
