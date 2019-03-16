Vue.component('greeting',{
    template:'<p>Hey there, I am a {{name}}. <button v-on:click="changeName">A</button></p>',
    
    data: function(){
        return {
            name: 'Yoshi'
        }
    },

    //Method only effects the individial component
    methods: {
        changeName: function(){
            this.name = 'Mario'
        }
    }
});

var one = new Vue({
    el:'#vue-app-one',

});

var two = new Vue({
    el:'#vue-app-two',

});


