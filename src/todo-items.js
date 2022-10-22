class NewToDoItem {
    constructor(title, description, dueDate, priority) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completed = false;
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
    },
    editStatus:
    function(activeTask, status) {
        activeTask.completed = status;
    },
    setPriorityClass:
    function(priority, taskNode){
        switch (priority) {
            case 'high':
                taskNode.className = 'high';
                break;
            case 'medium':
                taskNode.className = 'medium';
                break;
            case 'low':
                taskNode.className = 'low';
        } 
    },
}


export {
    todoItemsInts
}