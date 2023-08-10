import EventsObserver from "./index";

const TodoList = (() => {
    let _listArray: Project[] = [];

    const getList = () => _listArray.slice();
    const addProjectToList = (project: Project) => {
        _listArray.push(project);
        saveListToLocalStorage();
        EventsObserver.publish("addsProjectToList", getList());
    };
    const saveListToLocalStorage = () => {
        window.localStorage.setItem("TodoList", JSON.stringify(getList()));
    }
    const loadListFromLocalStorage = () => {
        _listArray = JSON.parse(window.localStorage.getItem("TodoList"));
        EventsObserver.publish("listModified", getList());
    }

    return {
        getList,
        addProjectToList,
        saveListToLocalStorage,
        loadListFromLocalStorage
    }
})();