const {createApp} = Vue

createApp({
    data: function(){
        return {
           toDoList :[],
        //    userChoice: {
        //     toDo : "",
        //     isDone: false
        //    },
           userChoice : "",
           isDone: false,
           indexPosition : 0
        }
    },
    methods :{
        // push the user choice at the beginning
        pushUserChoice : function(){
            if(this.userChoice){
                this.toDoList.unshift(this.userChoice);
                // this.userChoice.toDo = "";
                this.userChoice = "";
            }
        },
        // isItDone : function(Index){
        //     // this.indexPosition = Index;
        //     // this.isDone = !this.isDone;
        // },
        removeTask: function(indexs){
            this.toDoList.splice(indexs,1);
        }
    }
}).mount("#app")


// relativePicture: function(arrayIndex){
//     this.tabindex = arrayIndex
// }