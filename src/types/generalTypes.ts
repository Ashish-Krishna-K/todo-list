type EventHandlerType = <T>(data?: T) => void;

interface EventsType {
    [eventName: string]: EventHandlerType[];
}

interface ProjectType {
    getProjectId: () => string;
    getProjectName: () => string;
    setProjectName: (newName: string) => void;
    getAllTodos: () => TodoItemType[];
    addTodoItem: (todoTitle: string, todoDescription: string, todoDueDate: Date, todoPriority: PriorityEnum) => void;
    editTodoItem: (todoTitle: string, todoDescription: string, todoDueDate: Date, todoPriority: PriorityEnum, todoId: string) => void;
    deleteTodoItem: (todoId: string) => void;
}

interface TodoItemType {
    getUid: () => string,
    getTitle: () => string,
    setTitle: (newTitle: string) => void,
    getDescription: () => string,
    setDescription: (newDescription: string) => void,
    getDueDate: () => Date,
    setDueDate: (newDate: Date) => void,
    getPriority: () => PriorityEnum,
    setPriority: (newPriority: PriorityEnum) => void,
    toggleCompleted: () => void,
    getParentProject: () => string,
}

enum PriorityEnum {
    high = "HIGH",
    mid = "MEDIUM",
    low = "LOW"
}