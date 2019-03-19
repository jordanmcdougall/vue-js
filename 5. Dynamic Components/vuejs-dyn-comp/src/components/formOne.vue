<template>
<div>
    <form-helper>
        <div slot="form-header">
            <h3>Form One</h3>
            <p>Contact Us</p>
        </div>    
        <div slot="form-fields">
            <input type="text" placeholder="name" required>
            <label>Your Message:</label>
            <textarea></textarea>
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
