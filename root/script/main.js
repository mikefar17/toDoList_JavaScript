var toDoList = {
    todos: [],
    displayTD: function() {
        console.log(this.todos);
        if(this.todos.length === 0) {
            console.log("You have nothing to do.");
        }
        else{
            for(var i = 0; i < this.todos.length; i ++) {
                if(this.todos[i].completed === true) {
                    console.log("(X)", this.todos[i].todo);
                }
                else {
                    console.log("( )", this.todos[i].todo);
                }
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
        this.displayTD();
    },
    editTD: function(position, newValue) {
        this.todos[position].todo = newValue;
        this.displayTD();
    },
    toggle: function(position) {
        var td = this.todos[position];
        td.completed = !td.completed; 
        this.displayTD();
    },
    toggleAll: function() {
    // Actual Logic if all todos are true , make them all false 
        var count = 0; 
        for(var i = 0; i < this.todos.length; i++) {
            if(this.todos[i].completed === true) {
                count++;
            }
        }
        if(count.length === this.todos.length) {
            for(var i = 0; i<this.todos.length; i++) {
                this.todos[i].completed = false;
            }
        }
    
  /*      for(var i = 0; i < this.todos.length; i++) { // My logic was I wanted to test if one of todos was true then turn them all true if not then turn all false
            if(this.todos[i].completed === true) {
                for(var i = 0; i < this.todos.length; i++) {
                    this.todos[i].completed = true; 
                }
            } else {
                for(var i= 0; i< this.todo.length; i++) {
                    this.todos[i].completed = false;
                }
            }
        } */
    }
    
}
// At the end of the day what do I want?
// toDoList.add("make your bed")
// which will give me: ( ) make your bed 
 
// Create an Object with properties that can access functions 
// Add toDo