class NewToDoItem {
    constructor(title, description, dueDate, priority, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project
    }

}

function createTodoItem (title, description, dueDate, priority, project) {
    const activeArr = project.tasks;

    activeArr.push(new NewToDoItem(title, description, dueDate, priority, project))
};


export {
    createTodoItem
}