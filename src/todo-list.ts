const TodoList = (() => {
    let _listArray: Project[] = [];

    const getList = () => _listArray.slice();
    const addProjectToList = (project: Project) => _listArray.push(project);
    const replaceList = (list: Project[]) => _listArray = list;
    const saveListToLocalStorage = () => {
        window.localStorage.setItem("TodoList", JSON.stringify(getList()));
    }
    const loadListFromLocalStorage = () => {
        const savedList = JSON.parse(window.localStorage.getItem("TodoList"));
        replaceList(savedList);
    }

    return {
        getList,
        addProjectToList,
        saveListToLocalStorage,
        loadListFromLocalStorage
    }
})();