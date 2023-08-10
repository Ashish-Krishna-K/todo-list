import EventsObserver from "./index";
import Project from "./projects";

const TodoList = (() => {
    let _listArray: ProjectType[] = [];

    const getList = () => _listArray.slice();
    const _addProjectToList = (project: ProjectType) => {
        _listArray.push(project);
        saveListToLocalStorage();
        EventsObserver.publish("addsProjectToList", getList());
    };
    const saveListToLocalStorage = () => {
        window.localStorage.setItem("TodoList", JSON.stringify(getList()));
    }
    const createList = (() => {
        const savedList = window.localStorage.getItem("TodoList");
        if (savedList) {
            _listArray = JSON.parse(savedList);
        } else {
            _addProjectToList(Project("Home", "Home"));
            EventsObserver.publish("newListCreated", getList());
        }
    })();
    const createProject = (projectName: string) => {
        _addProjectToList(Project(Date.now() + projectName, projectName));
        EventsObserver.publish("listChanged", getList());
    }
    const editProjectName = (projectId: string, newName: string) => {
        const selectedProject = _listArray.filter(project => project.getProjectId() === projectId)[0];
        selectedProject.setProjectName(newName);
        EventsObserver.publish("projectNameChanged", selectedProject);
    }
    const deleteProject = (projectId: string) => {
        _listArray = _listArray.filter(project => project.getProjectId() !== projectId);
        EventsObserver.publish("listChanged", getList());
    }
    return {
        getList,
        createProject,
        editProjectName,
        deleteProject,
        saveListToLocalStorage,
    }
})();

export default TodoList;