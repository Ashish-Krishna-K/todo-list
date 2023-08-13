import EventsObserver from "./eventsObserver";
import '../styles/index.css'

// the todoList object
const todoList: TodoListType = {
    // array holding all the projects
    list: [],
    // completely replace the list useful for deleting projects and loading saved data
    replaceList: (newList: ProjectType[]) => todoList.list = newList,
    // add a new project to the list
    addProject: (project: ProjectType) => todoList.list.push(project),
    // get a project from the list
    getProject: (projectId: string) => {
        return todoList.list.filter(project => project.projectId === projectId)[0];
    },
    // edit a given project name
    editProjectName: (projectId: string, newName: string) => {
        const selectedProject = todoList.getProject(projectId);
        selectedProject.projectName = newName;
    },
    // delete a project
    deleteProject: (projectId: string) => {
        todoList.replaceList(todoList.list.filter(project => project.projectId !== projectId));
    }
}

// create a new list with default project
const createNewList = () => {
    EventsObserver.publish("newProjectCreationRequest", {
        projectName: "Home",
        projectId: "defaultHome"
    })
}

// whenever list is changed publish the event
const publishListChange = () => {
    const list = todoList.list;
    EventsObserver.publish("listChanged", { list });
}

// data saved in localStorage is loaded replace current data with loaded data
const handleLoadedListFromStorage = (data: ListPayload) => {
    todoList.replaceList(data.savedList);
    publishListChange();
}

// a new project is created, append it to the list
const handleNewProjectCreated = (data: ProjectPayload) => {
    todoList.addProject(data.project);
    publishListChange();
}

// a request to change project name is received, update project name
const handleProjectNameChangeRequest = (data: GenericObj) => {
    const {
        projectId,
        newName
    } = data;
    todoList.editProjectName(projectId, newName);
    publishListChange();
}

// a request to edit a todo item received, get the relevant project and 
// publish an event requesting todo item editing
const handleEditTodoRequest = (data: GenericObj) => {
    const {
        parentProject
    } = data;
    const selectedProject = todoList.getProject(parentProject);
    EventsObserver.publish("editTodoRequestProjectFound", { parent: selectedProject, todoData: data });
}

// a request to create a new todo item received, get the relevant project and
// publish an event to create a new todo item in the project
const handleTodoCreationRequest = (todoData: GenericObj) => {
    const selectedProject = todoList.getProject(todoData.parentProject);
    EventsObserver.publish("newTodoItemCreationProjectFound", { parent: selectedProject, todoData })
}

// a request to delete a project is received, delete the project and publish 
// default project
const handleDeleteProject = (data: GenericObj) => {
    // preventing user from deleting the default project
    if (data.projectId === "defaultHome") {
        EventsObserver.publish("showError", { errorMsg: "Default Project cannot be deleted" });
        return;
    }
    todoList.deleteProject(data.projectId);
    EventsObserver.publish("projectChanged", { project: todoList.getProject("defaultHome") });
}

// a request to toggle todo completion status is received, get the relevant project
// and publish it to be toggled
const handleToggleTodoStatus = (data: GenericObj) => {
    EventsObserver.publish("toggleTodoStatus", { parent: todoList.getProject(data.parent), todoId: data.todoId });
}

// a request to delete a todo item received, get the relevant project and publish
// it requesting to delete the todo item
const handleDeleteTodoBtnClick = (data: GenericObj) => {
    EventsObserver.publish("deleteTodoItem", { parent: todoList.getProject(data.parent), todoId: data.todoid });
}

// if localStorage does not have a saved list create a new list
EventsObserver.subscribe("savedListEmpty", createNewList);
// if localStorage does have a saved list replace the current list with new one
EventsObserver.subscribe("savedListLoaded", handleLoadedListFromStorage);
// whenever "newProjectCreated" add it to list
EventsObserver.subscribe("newProjectCreated", handleNewProjectCreated);
// whenever "projectNameChangeRequest" update project name
EventsObserver.subscribe("projectNameChangeRequest", handleProjectNameChangeRequest);
// see above function definition
EventsObserver.subscribe("editTodoRequest", handleEditTodoRequest);
// see above function definition
EventsObserver.subscribe("newTodoItemCreationRequest", handleTodoCreationRequest);
// whenever "projectChanged" is fired publish it for saving and re-rendering
EventsObserver.subscribe("projectChanged", publishListChange);
// see above function definition
EventsObserver.subscribe("deleteProjectClicked", handleDeleteProject);
// see above function definition
EventsObserver.subscribe("toggleTodoStatusRequest", handleToggleTodoStatus);
// see above function definition
EventsObserver.subscribe("deleteTodoBtnClicked", handleDeleteTodoBtnClick);

// when script is loaded checkStorage to see if we have saved list
EventsObserver.publish("checkStorage");
// select default project to be rendered
EventsObserver.publish("projectChanged", { project: todoList.getProject("defaultHome") });