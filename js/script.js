const {createApp} = Vue

createApp({
    data: function(){
        return {
           toDoList :[],
           userChoice: {
            toDo : "",
            isDone: false
           },
        //    userChoice : "",
        //    isDone: false,
           indexPosition : 0
        }
    },
    methods :{
        // push the user choice at the beginning
        pushUserChoice : function(){
            if(this.userChoice.toDo){
                this.toDoList.unshift({...this.userChoice});
                // this.userChoice.toDo = "";
                this.userChoice.toDo = "";
            }
        },
        // isItDone : function(Index){
        //     // this.indexPosition = Index;
        //     // this.isDone = !this.isDone;
        // },
        removeTask: function(indexs){
            this.toDoList.splice(indexs,1);
        }
        // ,
        // slideForward: function(){
        //     if(this.indexPosition < this.toDoList.length - 1){
        //         this.indexPosition++
        //     }else{
        //         this.indexPosition = 0
        //     }
        // }
    }
}).mount("#app")
