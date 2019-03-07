//Declare a new Vue instance
new Vue({
    
    //Root element (i.e. control anything inside this div)
    el:'#vue-app',

    data:{
        name: 'Jordan',
        job: 'Technologist',
        age: 25,
        website: 'https:/youtube.com',
        websiteTag: '<a href="https:/youtube.com">Website 2</a>',
        x:0,
        y:0
    },
    //i.e functions
    methods:{
        greet: function(time){
            
            //The this keyword relates to everything in this Vue instance
            this.name;
            return 'Good ' + time + ', ' + this.name;
        },
        addAge: function (inc){
            this.age += inc;
        },
        subtractAge: function(dec){
            this.age -= dec;
        },
        updateXY: function(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        alertmsg: function(event){
            alert('you clicked me');
        }
    }
});