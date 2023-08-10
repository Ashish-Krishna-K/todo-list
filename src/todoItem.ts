import EventsObserver from "./index";

const TodoItem = (uid: string, todoTitle: string, todoDescription: string, todoDueDate: Date, todoPriority: PriorityEnum, parentId: string): TodoItemType => {
    const _uid = uid;
    let _title = todoTitle;
    let _description = todoDescription;
    let _dueDate = todoDueDate;
    let _priority = todoPriority;
    let _completed = false;
    const _parentProject = parentId;

    const getUid = () => _uid;

    const getTitle = () => _title;
    const setTitle = (newTitle: string) => {
        _title = newTitle;
    }

    const getDescription = () => _description;
    const setDescription = (newDescription: string) => {
        _description = newDescription;
    }

    const getDueDate = () => _dueDate;
    const setDueDate = (newDueDate: Date) => {
        _dueDate = newDueDate;
    }

    const getPriority = () => _priority;
    const setPriority = (newPriority: PriorityEnum) => {
        _priority = newPriority;
    }

    const toggleCompleted = () => {
        _completed = !_completed;
    }

    const getParentProject = () => _parentProject;

    return {
        getUid,
        getTitle,
        setTitle,
        getDescription,
        setDescription,
        getDueDate,
        setDueDate,
        getPriority,
        setPriority,
        toggleCompleted,
        getParentProject,
    }
}

export default TodoItem