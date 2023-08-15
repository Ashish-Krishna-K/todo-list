import EventsObserver from "./eventsObserver";
import {
    getAddProjectBtn,
    getAddTodoBtn,
    getCancelAddProjectBtn,
    getCancelAddTodoBtn,
    getCancelEditTodoBtn,
    getDismissErrorBtn,
    getEditTodoFrm,
    getEditTodoSection,
    getErrorMsgDisplay,
    getErrorSection,
    getProjectFrm,
    getProjectsSection,
    getTodoContainer,
    getTodoFrm,
    getTodosSection,
    getAddTodoModal,
    getProjectControls
} from "./domSelectors";
import {
    editTodoComponent,
    sidebarComponent,
    todoComponent
} from "./displayComponents"

// render the sidebar
const renderSidebar = (data: ListPayload) => {
    const todoList = data.list;
    const projectsSection = getProjectsSection();
    // remove all current contents of the sidebar
    projectsSection.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = "Projects";
    projectsSection.appendChild(heading);

    const sidebarContainer = document.createElement('ul');
    sidebarContainer.classList.add('project-container');
    // create a li item by calling the sidebarComponent for each project
    todoList.forEach(project => {
        sidebarContainer.appendChild(sidebarComponent(project))
    });

    projectsSection.appendChild(sidebarContainer);
    // publish the "sidebarRendered" event
    EventsObserver.publish("sidebarRendered");
};

// render the project
const renderProject = (data: ProjectPayload) => {
    const selectedProject = data.project
    const todoSection = getTodosSection();
    // remove the current contents of the project section
    todoSection.innerHTML = '';

    const heading = document.createElement('h2');
    heading.textContent = selectedProject.projectName;
    todoSection.appendChild(heading);

    const todoContainer = document.createElement('ul');
    todoContainer.classList.add('todo-container');
    todoContainer.dataset.projectId = selectedProject.projectId;
    // for each todo item in the project render the todoComponent as li element
    if (selectedProject.todos.length === 0) {
        todoContainer.textContent = "You don't have any todos in this project, add a new todo."
    } else {
        selectedProject.todos?.forEach(todo => {
            todoContainer.appendChild(todoComponent(todo));
        });
    }

    todoSection.appendChild(todoContainer);
    EventsObserver.publish("projectRendered");
};

// show/hide the add project form
const toggleAddProjectForm = () => {
    getProjectFrm().classList.toggle('hidden');
};

// show/hide the add todo form
const toggleAddTodoForm = () => {
    getTodoFrm().classList.toggle('hidden');
    getAddTodoModal().classList.toggle('hidden');
    // hide the todos section when add todo form is shown
    getTodosSection().classList.toggle('hidden');
};

// event handler when edit project name is clicked, this is getting the data from the event publisher
const handleEditProjectNameBtnClick = (btn: HTMLButtonElement) => {
    const projectControls = getProjectControls(btn.parentElement.parentElement);
    const editFrm = projectControls.nextElementSibling;
    const projectNameDisplay = projectControls.previousElementSibling;
    editFrm.classList.remove('hidden');
    projectControls.classList.add('hidden');
    projectNameDisplay.classList.add('hidden');
    // attach the submit event listener to the form
    editFrm.addEventListener("submit", function (this: HTMLFormElement, ev: SubmitEvent) {
        // prevent the default action of the submit event
        ev.preventDefault();
        const formData = new FormData(this);
        const payLoad = {
            projectId: formData.get("project-id").toString(),
            newName: formData.get("project-name").toString()
        };
        // publish the "projectNameChangeRequest" event with the formData as the EventData
        EventsObserver.publish("projectNameChangeRequest", payLoad)
    })
}

// event handler when the cancel edit project name is clicked
const handleCancelEditProjectNameBtnClick = (btn: HTMLButtonElement) => {
    const projectControls = getProjectControls(btn.parentElement.parentElement.parentElement);
    projectControls.nextElementSibling.classList.add('hidden');
    projectControls.previousElementSibling.classList.remove('hidden');
    projectControls.classList.remove('hidden');
}

// event handler for the edit todo item button is clicked, it get's the data from the event
// publisher
const handleEditTodoBtnClick = (todo: TodoItemType) => {
    const editTodoSection = getEditTodoSection();
    getTodosSection().classList.toggle('hidden');
    editTodoSection.classList.remove('hidden');
    // remove the current contents of the editTodoSection
    editTodoSection.innerHTML = '';
    // create a modal
    const modalDisplay = document.createElement('div');
    modalDisplay.classList.add('modal');
    // render a new editTodoForm with the provided todo data
    modalDisplay.appendChild(editTodoComponent(todo));
    editTodoSection.appendChild(modalDisplay);
    // we will attach the event listeners here because the edit form is rendered only after the 
    // edit button is clicked

    // attach the submit event listener
    getEditTodoFrm().addEventListener("submit", function (this: HTMLFormElement, ev: SubmitEvent) {
        // prevent the default action of the submit event
        ev.preventDefault();
        const formData = new FormData(this);
        const data: GenericObj = {}
        for (let [key, value] of formData.entries()) {
            data[key] = value.toString();
        }
        data["parentProject"] = todo.parentProject;
        // publish the "editTodoRequest" event with the formData as EventData
        EventsObserver.publish("editTodoRequest", data);
        // reset the todo form
        this.reset();
        editTodoSection.classList.add('hidden');
        getTodosSection().classList.toggle('hidden');
    });
    // attach the cancel event listener
    getCancelEditTodoBtn().addEventListener("click", function (this: HTMLButtonElement, ev: MouseEvent) {
        editTodoSection.classList.add('hidden');
        getTodosSection().classList.toggle('hidden');
    })
}

// show error message
const handleShowError = (data: GenericObj) => {
    const errorSection = getErrorSection()
    getErrorMsgDisplay().textContent = data.errorMsg;
    errorSection.classList.remove('hidden');
    errorSection.firstElementChild.classList.toggle('hidden');
    // attach event listener to the button to dismiss error
    getDismissErrorBtn().addEventListener("click", function (this: HTMLButtonElement, ev: MouseEvent) {
        errorSection.classList.add('hidden');
        errorSection.firstElementChild.classList.toggle('hidden');
    })
}

// event listener for the add new project button
getAddProjectBtn().addEventListener("click", function (this: HTMLButtonElement, ev: MouseEvent) {
    this.classList.add('hidden');
    toggleAddProjectForm();
});
// event listener to cancel the add new project
getCancelAddProjectBtn().addEventListener("click", () => {
    getAddProjectBtn().classList.remove('hidden');
    toggleAddProjectForm();
});

// event listener for the add new todo form
getAddTodoBtn().addEventListener("click", function (this: HTMLButtonElement, ev: MouseEvent) {
    this.classList.add('hidden');
    toggleAddTodoForm()
});
// event listener to cancel the add new todo
getCancelAddTodoBtn().addEventListener("click", () => {
    getAddTodoBtn().classList.remove('hidden');
    toggleAddTodoForm();
});

// attaching the submit event handler for the add new project form
getProjectFrm().addEventListener("submit", function (this: HTMLFormElement, ev: SubmitEvent) {
    // prevent the default action of the submit event
    ev.preventDefault();
    const formData = new FormData(this);
    // publish the "newProjectCreationRequest" event with the name as the EventData
    EventsObserver.publish("newProjectCreationRequest", { projectName: formData.get("project-name").toString() });
    // reset the form
    this.reset();
    toggleAddProjectForm();
    getAddProjectBtn().classList.remove('hidden');
});

// attaching the submit event handler for the add new todo form
getTodoFrm().addEventListener("submit", function (this: HTMLFormElement, ev: SubmitEvent) {
    // prevent the default action of the submit event
    ev.preventDefault();
    const formData = new FormData(this);
    const data: GenericObj = {}
    for (let [key, value] of formData.entries()) {
        data[key] = value.toString();
    }
    data["parentProject"] = (getTodoContainer() as HTMLUListElement).dataset.projectId;
    // publish the "newTodoItemCreationRequest" event with the formData as EventData
    EventsObserver.publish("newTodoItemCreationRequest", data);
    // reset the form
    this.reset();
    toggleAddTodoForm();
    getAddTodoBtn().classList.remove('hidden');
});

// subscribe to all necessary events

// whenever "listChanged" is fired we'll re-render the sidebar.
EventsObserver.subscribe("listChanged", renderSidebar);
// whenever "projectChanged" is fired we'll re-render the project section.
EventsObserver.subscribe("projectChanged", renderProject);
// event handler for edit project name button
EventsObserver.subscribe("editProjectNameBtnClicked", handleEditProjectNameBtnClick);
// event handler for cancel edit project name button
EventsObserver.subscribe("cancelEditProjectNameBtnClicked", handleCancelEditProjectNameBtnClick);
// event handler for edit todo button
EventsObserver.subscribe("editTodoBtnClicked", handleEditTodoBtnClick);
// we'll display errors(currently when user tries to delete default project)
EventsObserver.subscribe("showError", handleShowError);