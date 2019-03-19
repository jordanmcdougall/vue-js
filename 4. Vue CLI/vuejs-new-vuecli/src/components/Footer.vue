<template>
  <div>
      <footer>
        <p>{{ copyright }}  {{ title }}</p>
      </footer>
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
        copyright: "Copyright 2019: "
    }
  },
  //created when component created
  created(){
    bus.$on('titleChanged', (data) => {
      this.title = data;
    })
  }

  }

</script>

<!--Use scoped to only apply style -->
<style scoped>

footer{
    background:#222;
    padding: 6px;

}
p {
    color: lightgreen;
    text-align: center;
}
</style>
