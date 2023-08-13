type EventPayloads =
    | TodoItemType
    | GenericObj
    | HTMLElement
    | ListPayload
    | ProjectPayload
    | TodoDataPayload
    | TodoIdPayload;

type EventHandlerType<T extends EventPayloads> = (data?: T) => void;

type EventsType = {
    [eventName: string]: EventHandlerType<EventPayloads>[];
}

interface TodoListType {
    list: ProjectType[],
    replaceList: (newList: ProjectType[]) => void,
    addProject: (project: ProjectType) => void,
    getProject: (projectId: string) => ProjectType,
    editProjectName: (projectId: string, newName: string) => void,
    deleteProject: (projectId: string) => void
}

interface ProjectType {
    projectId: string,
    projectName: string,
    todos: TodoItemType[]
}

interface TodoItemType {
    uid: string,
    title: string,
    description: string,
    dueDate: Date,
    priority: PriorityEnum,
    completed: boolean,
    parentProject: string,
}

interface GenericObj {
    [key: string]: string,
}

interface ListPayload {
    [key: string]: ProjectType[];
}

interface ProjectPayload {
    project: ProjectType;
}

interface TodoDataPayload {
    parent: ProjectType,
    todoData: GenericObj
}

interface TodoIdPayload {
    parent: ProjectType,
    todoId: string
}

enum PriorityEnum {
    high = "HIGH",
    mid = "MEDIUM",
    low = "LOW"
}
