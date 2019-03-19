<template>
  <div>
      <header>
        <h1 v-on:click="changeTitle">{{ title }}</h1>
      </header> 
  </div>
</template>

<script>

import {bus} from "../main"

export default {
props:{
    title:{
        type: String
    }
},
  data () {
    return {
    }
  
    },
      methods:{
        changeTitle: function(){
            //emit an event
            //this.$emit('changeTitle', 'Vue Wizzards');
            this.title = "Vue Warriors"
            bus.$emit("titleChanged", "Vue Warriors")
        }
  }

  }

</script>

<!--Use scoped to only apply style -->
<style scoped>

header{
    background: lightgreen;
    padding: 10px;

}
h1 {
    color: #222;
    text-align: center;
}
</style>
