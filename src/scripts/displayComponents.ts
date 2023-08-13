import EventsObserver from "./eventsObserver";

// the edit project name form
const editProjectNameFrmComponent = (currentName: string, projectId: string) => {
    // creating the form itself
    const frm = document.createElement('form');
    frm.id = "edit-project-form";

    // creating the form header
    const frmHeader = document.createElement('div');
    frmHeader.classList.add('form-header');

    // the form heading
    const heading = document.createElement('h2');
    heading.textContent = "Edit Project Name";
    frmHeader.appendChild(heading);

    // cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.classList.add('cancel-edit-project');
    cancelBtn.type = "button";
    cancelBtn.textContent = "Cancel";
    cancelBtn.addEventListener("click", function (this: HTMLButtonElement) {
        EventsObserver.publish("cancelEditProjectNameBtnClicked", this);
    })
    frmHeader.appendChild(cancelBtn);

    frm.appendChild(frmHeader);

    // a hidden input for providing projectId
    const projectIdInput = document.createElement('input');
    projectIdInput.type = "text";
    projectIdInput.name = "project-id"
    projectIdInput.value = projectId;
    projectIdInput.hidden = true;
    projectIdInput.readOnly = true;
    frm.appendChild(projectIdInput);

    // the name section
    const nameSection = document.createElement('div');
    nameSection.classList.add('name-section');

    const projectNameLabel = document.createElement('label');
    projectNameLabel.htmlFor = "project-name";
    nameSection.appendChild(projectNameLabel);

    const projectNameInput = document.createElement('input');
    projectNameInput.type = "text";
    projectNameInput.name = "project-name";
    projectNameInput.id = "edit-project-name"
    projectNameInput.value = currentName;
    nameSection.appendChild(projectNameInput);

    frm.appendChild(nameSection);

    // a controls section
    const controlsSection = document.createElement('div');
    controlsSection.classList.add('controls-section');

    const submitBtn = document.createElement('button');
    submitBtn.type = "submit";
    submitBtn.classList.add("submit-edit-project-btn");
    submitBtn.textContent = "Confirm"
    controlsSection.appendChild(submitBtn);

    frm.appendChild(controlsSection);

    return frm;
}

// the sidebar component
const sidebarComponent = (project: ProjectType) => {
    // the li element holding all the elements
    const projectLi = document.createElement('li');
    projectLi.dataset.projectId = project.projectId;

    // the project name
    const projectName = document.createElement('p');
    projectName.textContent = project.projectName;
    projectName.dataset.projectId = project.projectId;
    // clicking on the project name "selects" the project to be displayed
    projectName.addEventListener("click", function (this: HTMLLIElement) {
        EventsObserver.publish("projectChanged", { project });
    })
    projectLi.appendChild(projectName);

    // the edit button
    const editProjectName = document.createElement('button');
    editProjectName.classList.add('edit-project-name');
    editProjectName.value = project.projectId;
    editProjectName.textContent = "Edit";
    editProjectName.addEventListener("click", function (this: HTMLButtonElement) {
        EventsObserver.publish("editProjectNameBtnClicked", this);
    })
    projectLi.appendChild(editProjectName);

    // the delete button
    const deleteProject = document.createElement('button');
    deleteProject.classList.add('delete-project');
    deleteProject.value = project.projectId;
    deleteProject.textContent = "Delete";
    deleteProject.addEventListener("click", function (this: HTMLButtonElement) {
        EventsObserver.publish("deleteProjectClicked", { projectId: project.projectId });
    })
    projectLi.appendChild(deleteProject);

    // the edit project name component, initially hidden
    const editNameFrm = editProjectNameFrmComponent(project.projectName, project.projectId);
    editNameFrm.classList.add('hidden');
    projectLi.appendChild(editNameFrm);

    projectLi.classList.add('project');

    return projectLi;
};

// the todo component
const todoComponent = (todo: TodoItemType) => {
    // creating an identifier object which can be passed to any appropriate 
    // function
    const todoIdentifier = {
        parent: todo.parentProject,
        todoid: todo.uid
    };
    // creating the li element container holding the entire todo item
    const todoLi = document.createElement('li');
    todoLi.classList.add('todo-item');

    // the checkbox for marking the todo as done
    const doneStatusDisplay = document.createElement('input');
    doneStatusDisplay.type = "checkbox";
    doneStatusDisplay.checked = todo.completed;
    doneStatusDisplay.value = todo.uid;
    doneStatusDisplay.addEventListener("click", function () {
        EventsObserver.publish("toggleTodoStatusRequest", todoIdentifier);
    })
    todoLi.appendChild(doneStatusDisplay);

    // the todo title 
    const titleDisplay = document.createElement('p');
    titleDisplay.textContent = todo.title;
    todoLi.appendChild(titleDisplay);

    // the todo description
    const descriptionDisplay = document.createElement('p');
    descriptionDisplay.textContent = todo.description;
    descriptionDisplay.classList.add('hidden');
    todoLi.appendChild(descriptionDisplay);

    // the todo dueDate
    const dueDateDisplay = document.createElement('p');
    dueDateDisplay.textContent = new Date(todo.dueDate).toDateString();
    todoLi.appendChild(dueDateDisplay);

    // the controls section housing the edit and delete buttons
    const controlSection = document.createElement('div');
    controlSection.classList.add('todo-controls');

    // the edit button
    const editTodoBtn = document.createElement('button');
    editTodoBtn.classList.add('edit-todo-btn');
    editTodoBtn.value = JSON.stringify(todoIdentifier);
    editTodoBtn.textContent = "Edit";
    editTodoBtn.addEventListener("click", () => {
        // when the edit todo button is clicked render the edit todo form
        EventsObserver.publish("editTodoBtnClicked", todo);
    })
    controlSection.appendChild(editTodoBtn);

    // the delete button
    const deleteTodoBtn = document.createElement('button');
    deleteTodoBtn.classList.add('delete-todo-btn');
    deleteTodoBtn.value = JSON.stringify(todoIdentifier);
    deleteTodoBtn.textContent = "Delete";
    // event handler for deleting the todo
    deleteTodoBtn.addEventListener("click", () => {
        EventsObserver.publish("deleteTodoBtnClicked", todoIdentifier);
    })
    controlSection.appendChild(deleteTodoBtn);

    todoLi.appendChild(controlSection);

    //  when the todo title is clicked show the todo description
    titleDisplay.addEventListener("click", function () {
        descriptionDisplay.classList.toggle("hidden");
    })

    // based on the todo priority it will be color coded
    switch (todo.priority) {
        case ("HIGH"):
            todoLi.classList.add('high-priority');
            break;
        case ("MEDIUM"):
            todoLi.classList.add('mid-priority');
            break;
        case ("LOW"):
            todoLi.classList.add("low-priority");
            break;
    }

    // put a strikethrough on the entire todo if it's completed
    todo.completed ? todoLi.classList.add('completed-todo') : todoLi.classList.remove('completed-todo');

    return todoLi;
}

// the edit todo form
const editTodoComponent = (todo: TodoItemType) => {
    // the form itself
    const editTodoFrm = document.createElement('form');
    editTodoFrm.id = "edit-todo-form";

    // the form header
    const frmHeader = document.createElement('div');
    frmHeader.classList.add('form-header');

    // the heading
    const frmHeading = document.createElement('h2');
    frmHeading.textContent = "Edit Todo"
    frmHeader.appendChild(frmHeading);

    // the cancel button
    const cancelBtn = document.createElement('button');
    cancelBtn.type = "button";
    cancelBtn.classList.add('cancel-edit-todo');
    cancelBtn.textContent = "Cancel";
    frmHeader.appendChild(cancelBtn);

    // a hidden input holding the todoId
    const todoId = document.createElement('input');
    todoId.type = "text";
    todoId.name = "todoId";
    todoId.value = todo.uid;
    todoId.hidden = true;
    todoId.readOnly = true;
    frmHeader.appendChild(todoId);

    editTodoFrm.appendChild(frmHeader);

    // the title section
    const titleSection = document.createElement('div');
    titleSection.classList.add('title-section');

    // the label
    const titleLabel = document.createElement('label');
    titleLabel.htmlFor = "title";
    titleLabel.textContent = "Title"
    titleSection.appendChild(titleLabel);

    // the input for the title
    const titleInput = document.createElement('input');
    titleInput.type = "text";
    titleInput.name = "title";
    titleInput.id = "title";
    titleInput.value = todo.title;
    titleSection.appendChild(titleInput);

    editTodoFrm.appendChild(titleSection);

    // description section
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('description-section');

    // label for dsescription
    const descriptionLabel = document.createElement('label');
    descriptionLabel.htmlFor = "description";
    descriptionSection.appendChild(descriptionLabel);

    // descrprition input
    const descriptionInput = document.createElement('textarea');
    descriptionInput.name = "description";
    descriptionInput.id = "description";
    descriptionInput.cols = 30;
    descriptionInput.rows = 10;
    descriptionInput.value = todo.description;
    descriptionSection.appendChild(descriptionInput);

    editTodoFrm.appendChild(descriptionSection);

    // dueDate section
    const dueDateSection = document.createElement('div');
    dueDateSection.classList.add('dueDate-section');

    // label for dueDate
    const dueDateLabel = document.createElement('label');
    dueDateLabel.htmlFor = "dueDate";
    dueDateLabel.textContent = "Due by";
    dueDateSection.appendChild(dueDateLabel);

    // dueDate input
    const dueDateInput = document.createElement('input');
    dueDateInput.type = "date";
    dueDateInput.name = "dueDate";
    dueDateInput.id = "dueDate";
    dueDateInput.value = new Date(todo.dueDate).toISOString().substring(0, 10);
    dueDateSection.appendChild(dueDateInput);

    editTodoFrm.appendChild(dueDateSection);

    // the priority section
    const prioritySection = document.createElement('div');
    prioritySection.classList.add('priority-section');

    // a heading indicating the priority section
    const priorityHeading = document.createElement('h3');
    priorityHeading.textContent = "Set Priority";
    prioritySection.appendChild(priorityHeading);

    // A section for high option
    const highOptionContainer = document.createElement('div');
    highOptionContainer.classList.add('radio-option');

    // high option radio button
    const highOption = document.createElement('input');
    highOption.type = "radio";
    highOption.name = "priority";
    highOption.id = "high";
    highOption.value = "HIGH";
    highOptionContainer.appendChild(highOption);

    // high option label
    const highOptionLabel = document.createElement('label');
    highOptionLabel.htmlFor = "high";
    highOptionLabel.textContent = "High";
    highOptionContainer.appendChild(highOptionLabel);

    prioritySection.appendChild(highOptionContainer);

    // A section for medium button
    const midOptionContainer = document.createElement('div');
    midOptionContainer.classList.add('radio-option');

    //  medium option radio button
    const midOption = document.createElement('input');
    midOption.type = "radio";
    midOption.name = "priority";
    midOption.id = "medium";
    midOption.value = "MEDIUM";
    midOptionContainer.appendChild(midOption);

    // medium option label
    const midOptionLabel = document.createElement('label');
    midOptionLabel.htmlFor = "medium";
    midOptionLabel.textContent = "Medium";
    midOptionContainer.appendChild(midOptionLabel);

    prioritySection.appendChild(midOptionContainer);

    // A section for low option
    const lowOptionContainer = document.createElement('div');
    lowOptionContainer.classList.add('radio-option');

    // low option radio button
    const lowOption = document.createElement('input');
    lowOption.type = "radio";
    lowOption.name = "priority";
    lowOption.id = "low";
    lowOption.value = "LOW";
    lowOptionContainer.appendChild(lowOption);

    // a label for low option
    const lowOptionLabel = document.createElement('label');
    lowOptionLabel.htmlFor = "low";
    lowOptionLabel.textContent = "Low";
    lowOptionContainer.appendChild(lowOptionLabel);

    prioritySection.appendChild(lowOptionContainer);

    // based on the current todo's data select appropriate option
    switch (todo.priority) {
        case ("HIGH"):
            highOption.checked = true;
            break;
        case ("MEDIUM"):
            midOption.checked = true;
            break;
        case ("LOW"):
            lowOption.checked = true;
            break;
    }

    editTodoFrm.appendChild(prioritySection);

    // a controls section
    const controlsSection = document.createElement('div');
    controlsSection.classList.add('controls-section');

    // the submit button
    const submitBtn = document.createElement('button');
    submitBtn.classList.add('submit-edit-todo-btn');
    submitBtn.textContent = "Confirm";
    controlsSection.appendChild(submitBtn);

    editTodoFrm.appendChild(controlsSection);

    return editTodoFrm;
}

export {
    sidebarComponent,
    todoComponent,
    editTodoComponent
}