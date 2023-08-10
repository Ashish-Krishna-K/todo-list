import EventsObserver from "./index";

const Project = () => {
  let _projectName = "";
  let _todos: TodoItem[] = [];

  const getProjectName = () => _projectName;
  const setProjectName = (newName: string) => {
    _projectName = newName;
    EventsObserver.publish("projectNameChanged");
  }
  const getAllTodos = () => _todos.slice();
  const addTodoItem = (todo: TodoItem) => {
    _todos.push(todo);
    EventsObserver.publish("todoItemAdded");
  }

  return {
    getProjectName,
    setProjectName,
    getAllTodos,
    addTodoItem
  }
}

const defaultProject = Project()