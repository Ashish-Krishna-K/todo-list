import EventsObserver from "./eventsObserver";

// project factory
const Project = (projectName: string, projectId: string): ProjectType => {
    let todos: TodoItemType[] = [];
    return {
        projectId,
        projectName,
        todos
    }
}

// todo item factory
const TodoItem = (
    title: string,
    description: string,
    dueDate: Date,
    priority: PriorityEnum,
    completed: boolean,
    uid: string,
    parentProject: string
): TodoItemType => {
    return {
        uid,
        title,
        description,
        dueDate,
        priority,
        completed,
        parentProject
    }
}

// return a todo item from given project
const getSingleTodo = (project: ProjectType, todoId: string) => {
    return project.todos.filter(todo => todo.uid === todoId)[0];
}

// create a new project and publish it
const createNewProject = (data: GenericObj) => {
    const {
        projectName,
        projectId
    } = data;
    const newProject = Project(projectName, projectId || Date.now() + projectName);
    EventsObserver.publish("newProjectCreated", { project: newProject })
}

// create a new todo and publish it
const createNewTodo = (data: TodoDataPayload) => {
    const {
        title,
        description,
        dueDate,
        priority
    } = data.todoData
    const newDueDate = new Date(dueDate);
    const uid = (data.parent.todos.length - 1 + Date.now()).toString();
    const newTodo = TodoItem(title, description, newDueDate, (priority as PriorityEnum), false, uid, data.parent.projectId);
    data.parent.todos.push(newTodo);
    EventsObserver.publish("projectChanged", { project: data.parent });
}

// toggle the completion status of a todo item and publish it
const toggleTodoCompletion = (data: TodoIdPayload) => {
    const {
        parent,
        todoId
    } = data
    const selectedTodo = getSingleTodo(parent, todoId);
    selectedTodo.completed = !selectedTodo.completed;
    EventsObserver.publish("projectChanged", { project: parent });
}

// update a given todo in the provided project and publish it
const updateTodo = (data: TodoDataPayload) => {
    const {
        todoId,
        title,
        description,
        dueDate,
        priority
    } = data.todoData;
    const currentTodo = getSingleTodo(data.parent, todoId);
    currentTodo.title = title;
    currentTodo.description = description;
    currentTodo.dueDate = new Date(dueDate);
    currentTodo.priority = priority as PriorityEnum;
    EventsObserver.publish("projectChanged", { project: data.parent });
}

// delete a given todo from provided project and publish status
const deleteTodo = (data: TodoIdPayload) => {
    data.parent.todos = data.parent.todos.filter(todo => todo.uid !== data.todoId);
    EventsObserver.publish("projectChanged", { project: data.parent });
}

// whenever a request to create new project is received, handle the request
EventsObserver.subscribe("newProjectCreationRequest", createNewProject);
// from the provided project do the necessary changes
EventsObserver.subscribe("editTodoRequestProjectFound", updateTodo);
// add a new todo item to provided project
EventsObserver.subscribe("newTodoItemCreationProjectFound", createNewTodo);
// toggle completion status of a todo in provided project
EventsObserver.subscribe("toggleTodoStatus", toggleTodoCompletion);
// handle deletetodoitem request
EventsObserver.subscribe("deleteTodoItem", deleteTodo);