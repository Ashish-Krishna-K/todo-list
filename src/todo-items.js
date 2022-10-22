class NewToDoItem {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

}

const todoItemsInts = {
    createTodoItem:
    function(title, description, dueDate, priority, project) {
        const activeArr = project.tasks;

        activeArr.push(new NewToDoItem(title, description, dueDate, priority))
    },
    editTodoItem:
    function(activeItem, title, desc, dueDate, priority) {
        activeItem.title = title;
        activeItem.description = desc;
        activeItem.dueDate = dueDate;
        activeItem.priority = priority
    }
}


export {
    todoItemsInts
}