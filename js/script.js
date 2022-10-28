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
        // push the user choice at the beginning of the array
        pushUserChoice : function(){
            if(this.userChoice.toDo && this.userChoice.toDo.length > 5){
                this.toDoList.unshift({...this.userChoice});
                // this.userChoice.toDo = "";
                this.userChoice.toDo = "";
            }
        },
        // function that switch the boolean value and it work with the class Underline in gtml
        isItDone : function(index){
            this.toDoList[index].isDone = !this.toDoList[index].isDone;
        },
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
