<template>
  <div id="ninjas">
  <h1>List of Ninjas</h1>
  <ul>
        <li v-for="ninja in ninjas" v-bind:key="ninja.id" v-on:click="ninja.show = !ninja.show">
          <h2>{{ninja.name}}</h2>
          <h3 v-show="ninja.show">{{ninja.color}}</h3>
        </li>
  </ul>
  </div>
</template>

<script>
export default {
  //Prop allows data to be passed down from the parent
  props:{
    ninjas:{
      //validation: i.e. is it required + needs to be an array (cos we're gonna cycle thru it)
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  //lifecyclehook
  beforeCreate(){
    alert('Before Create');
  },
  created(){
      //Good place to get data from DB
       alert('Created');
  },
  beforeMount(){
       alert('Before Mount');
  },
  mounted(){
       alert('Mounted');
  },
  //only fired when data changes
   beforeUpdate(){
       alert('Before Update');
  },
    updated(){
       alert('After Update');
  }

  }

</script>

<!--Use scoped to only apply style -->
<style scoped>

#ninjas{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul{
  display:flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li{
  flex-grow:1;
  flex-basis:300px;
  text-align: center;
  padding:30px;
  border: 1px solid #222;
}


</style>
