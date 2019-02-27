var toDoList = {
    todos: [],
    displayTD: function() {
        for(var i = 0; i < this.todos.length; i ++) {
            if(this.todos.completed === true) {
                console.log("(X)", this.todos[i].todo);
            }
            else {
                console.log("( )", this.todos[i].todo);
            }
        }
    },
    addTD: function (td) {
        this.todos.push({
            todo: td,
            completed: false
        });
        this.displayTD();
    },
    
    removeTD: function(position) {
        this.todos.splice(position,1);
    },
    editTD: function(position, newValue) {
        this.todos[position].todo = newValue;
        this.displayTD();
    },
    toggle: function(position) {
        var td = this.todos[position];
        td.completed = !td.completed; 
        this.displayTD();
    }
//    toggleAll: function() {
//        
//    }
    
}
// At the end of the day what do I want?
// toDoList.add("make your bed")
// which will give me: ( ) make your bed 
 
// Create an Object with properties that can access functions 
// Add toDo