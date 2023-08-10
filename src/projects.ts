import EventsObserver from "./index";
import TodoItem from "./todoItem";

const Project = (uid: string, projectName: string): ProjectType => {
  const _projectId = uid;
  let _projectName = projectName || "";
  let _todos: TodoItemType[] = [];

  const getProjectId = () => _projectId;

  const getProjectName = () => _projectName;
  const setProjectName = (newName: string) => {
    _projectName = newName;
  }
  const getAllTodos = () => _todos.slice();
  const addTodoItem = (todoTitle: string, todoDescription: string, todoDueDate: Date, todoPriority: PriorityEnum) => {
    const newTodo = TodoItem(`${_todos.length}${Date.now().toString()}`, todoTitle, todoDescription, todoDueDate, todoPriority, _projectId);
    _todos.push(newTodo);
    EventsObserver.publish("ProjectChanged", getAllTodos());
  }
  const editTodoItem = (todoTitle: string, todoDescription: string, todoDueDate: Date, todoPriority: PriorityEnum, todoId:string) => {
    const todoItem = _todos.filter(todo => todo.getUid() === todoId)[0];
    todoItem.setTitle(todoTitle);
    todoItem.setDescription(todoDescription);
    todoItem.setDueDate(todoDueDate);
    todoItem.setPriority(todoPriority);
    EventsObserver.publish("todoChanged", todoItem);
  }
  const deleteTodoItem = (todoId: string) => {
    _todos = _todos.filter(todo => todo.getUid() !== todoId);
    EventsObserver.publish("ProjectChanged", getAllTodos());
  }

  return {
    getProjectId,
    getProjectName,
    setProjectName,
    getAllTodos,
    addTodoItem,
    editTodoItem,
    deleteTodoItem
  }
}

export default Project;