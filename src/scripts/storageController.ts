import EventsObserver from "./eventsObserver";

// save the provided list to localStorage
const saveListToLocalStorage = (data: ListPayload) => {
    window.localStorage.setItem("TodoList", JSON.stringify(data.list));
}

// load the todoList from localStorage
const loadListFromLocalStorage = () => {
    return JSON.parse(window.localStorage.getItem("TodoList"));
}

// check if localStorage has a savedList and respond accordingly
const checkStorage = () => {
    const savedList = loadListFromLocalStorage();
    if (savedList) {
        EventsObserver.publish("savedListLoaded", { savedList });
    } else {
        EventsObserver.publish("savedListEmpty")
    }
}

// whenever "checkStorage" event is fired check storage for saved list
EventsObserver.subscribe("checkStorage", checkStorage);
// whenever "listChanged" event is fired, save it to localStorage
EventsObserver.subscribe("listChanged", saveListToLocalStorage);