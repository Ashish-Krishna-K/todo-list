type EventHandler = <T>(data?: T) => void;

interface Events {
    [eventName: string]: EventHandler[];
}

interface Project {
    _projectName: string;
    _todos: TodoItem[];
    getProjectName: () => string;
    setProjectName: (newName:string) => void;
    getAllTodos: () => TodoItem[];
    addTodoItem: (todo: TodoItem) => void;
    
}

interface TodoItem {

}