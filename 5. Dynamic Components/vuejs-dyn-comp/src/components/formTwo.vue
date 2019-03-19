<template>
<div>
    <form-helper>
        <div slot="form-header">
            <h3>Form Two</h3>
            <p>Enter you login details</p>
        </div>    
        <div slot="form-fields">
            <input type="text" placeholder="username" required>
            <input type="password" placeholder="password" required>    
        </div>
        <div slot="form-control">
            <button v-on:click="handleSubmit">Send</button>
        </div>
    </form-helper>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>
