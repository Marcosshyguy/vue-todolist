const {createApp} = Vue

createApp({
    data: function(){
        return {
           toDoList :[],
           userChoice: ""
        }
    },
    methods :{
        // push the user choice at the beginning
        pushUserChoice : function(){
            this.toDoList.push(this.userChoice);
        }
    }
}).mount("#app")
