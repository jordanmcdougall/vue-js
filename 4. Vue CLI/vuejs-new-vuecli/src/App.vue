<template>
  <div>
    <!--Need v bind to pass data to prop-->
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)"></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>

//Register locally to App.vue (nest)
import Ninjas from './components/Ninjas.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'



export default {
//Register locally to App.vue (nest)
  components:{
    'app-ninjas': Ninjas,
    'app-header': Header,
    'app-footer': Footer
  },
  name: 'app',
  data () {
    return {
      title: "Jordan's App",
      ninjas: [
        {name: "Jordan", color: "green", show: "false"},
        {name: "Lauren", color: "red", show: "false"},
        {name: "Sophie", color: "blue", show: "false"},
        {name: "Sofie", color: "black", show: "false"},
        {name: "Lola", color: "yellow", show: "false"},      
        {name: "Skye", color: "brown", show: "false"},
      ]
    }
  },
  methods:{
    updateTitle: function(updatedTitle){
      this.title = updatedTitle;
    }
  }

  }

</script>

<!--Use scoped to only apply style -->
<style scoped>

h1 {
  color: purple
}

</style>
