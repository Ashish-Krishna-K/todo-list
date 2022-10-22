import './style.css';
import { projectsArr, projectsLogic } from './projects';
import { projectInts, formBtnsInts } from './UI';
import { todoItemsInts } from './todo-items';

// when page first loads sidebar and main DOM elements should be rendered

const render = {
    
    projectsListDiv: document.querySelector('#projects-list'),
    
    titleDiv: document.querySelector('#project-title'),

    itemsDiv: document.querySelector('#todo-items'),

    renderSideBar: 
    function () {
        const allProjectsDiv = document.createElement('ul');
        allProjectsDiv.setAttribute('id', 'projects-parent');

        if (render.projectsListDiv.hasChildNodes()) {
            render.projectsListDiv.removeChild(document.querySelector('#projects-parent'));
        }

        // sidebar will iterate over projects array and render a element for each project

        projectsArr.forEach((project) => {
            const projectDiv = document.createElement('li');
            const projectDivText = document.createElement('div');
            projectDivText.classList.add('all-projects');
            projectDivText.dataset.index = projectsArr.indexOf(project);
            projectDivText.dataset.name = project.title;
            projectDivText.textContent = project.title;
            projectDiv.appendChild(projectDivText);

            const deleteProjectBtn = document.createElement('button');
            deleteProjectBtn.setAttribute('id', 'delete-project');
            deleteProjectBtn.dataset.index = projectsArr.indexOf(project);
            deleteProjectBtn.textContent = 'Delete'
            projectDiv.appendChild(deleteProjectBtn);

            allProjectsDiv.appendChild(projectDiv);
            render.projectsListDiv.appendChild(allProjectsDiv);
        });
        const allProjectsList = document.querySelectorAll('.all-projects');

        allProjectsList.forEach(node => node.addEventListener('click', function(e){
            let clickedProjectIndex = e.target.dataset.index;
            render.renderMain(clickedProjectIndex);
        }));

        const delProjectBtns = document.querySelectorAll('#delete-project');
        delProjectBtns.forEach(btn => btn.addEventListener('click', function(){
            let ind = btn.dataset.index;
            if (ind == 0) {
                alert('You cannot delete the home project!');
                return;
            };
            projectInts.deleteProject(ind);
            render.renderSideBar();
            render.renderMain();
        }))
    },

    // main content will render a project tilte(default will be home) and for all the todo items of the project a checkbox will be rendered

    renderMain: 
    function(index) {
        let a = document.querySelector('#items-parent');

        if (a) {
            render.itemsDiv.removeChild(a);
        }
        
        const allItemsDiv = document.createElement('ul');
        allItemsDiv.setAttribute('id', 'items-parent');
        let currentProject = projectInts.selectProject(index);
        render.titleDiv.textContent = currentProject.title;
        currentProject.tasks.forEach(task => render.renderCheckbox(task, currentProject.tasks.indexOf(task), allItemsDiv));
        render.itemsDiv.appendChild(allItemsDiv);

        const allEditItemBtns = document.querySelectorAll('.edit-item');
        allEditItemBtns.forEach(btn => btn.addEventListener('click', function(){
            formBtnsInts.showFrm(formBtns.newItemFrm);
            formBtns.newItemFrm.dataset.status = 'edit';
            formBtns.newItemFrm.dataset.editIndex = btn.dataset.index;
            let activeProjectTask = currentProject.tasks[btn.dataset.index];
            formElements.itemTitle.value = activeProjectTask.title;
            formElements.itemDescription.value = activeProjectTask.description;
            formElements.itemDueDate.value = activeProjectTask.dueDate;
        }));

        const allDeleteItemBtns = document.querySelectorAll('.delete-item');
        allDeleteItemBtns.forEach(btn => btn.addEventListener('click', function(){
            projectInts.deleteItem(currentProject.tasks, btn.dataset.index);
            
            let activeProject = projectsLogic.getCurrentProject(render.titleDiv.textContent);
            let index = projectsArr.indexOf(activeProject);
        
            render.renderMain(index);
        }))
    },

    renderCheckbox:
    function(obj, ind, parent) {
        if (!obj) {
            return;
        }
        const listItem = document.createElement('li');
        listItem.dataset.index = ind;
        
        const box = document.createElement('input');
        box.setAttribute('type', 'checkbox');
        box.setAttribute('id', obj.title);

        const boxLabel = document.createElement('label');
        boxLabel.setAttribute('for', obj.title);
        boxLabel.textContent = `task:${obj.title} is due by: ${obj.dueDate} and has a priority level set to ${obj.priority}`;
        
        const editItemBtn = document.createElement('button');
        editItemBtn.classList.add('edit-item');
        editItemBtn.dataset.index = ind;
        editItemBtn.textContent = 'Edit';
        
        const deleteItemBtn = document.createElement('button');
        deleteItemBtn.classList.add('delete-item');
        deleteItemBtn.dataset.index = ind;
        deleteItemBtn.textContent = 'Delete';
        
        listItem.appendChild(box);
        listItem.appendChild(boxLabel);
        listItem.appendChild(editItemBtn);
        listItem.appendChild(deleteItemBtn);

        parent.appendChild(listItem);
    },

}

const formBtns = {
    showProjectFrmBtn: document.querySelector('#new-project'),
    showItemsFrmBtn: document.querySelector('#new-item'),
    createProjectBtn: document.querySelector('#create-project'),
    createItemBtn: document.querySelector('#create-item'),
    newProjectFrm: document.querySelector('#new-project-form'),
    newItemFrm: document.querySelector('#new-item-form')
}

const formElements = {
    itemTitle: document.querySelector('#title'),
    itemDescription: document.querySelector('#description'),
    itemDueDate: document.querySelector('#due-date'),
    itemHighPriority: document.querySelector('#high'),
    itemMediumPriority: document.querySelector('#medium'),
    itemLowPriority: document.querySelector('#low')    
}

render.renderSideBar();
render.renderMain();

formBtns.showProjectFrmBtn.addEventListener('click', function(){
    formBtnsInts.showFrm(formBtns.newProjectFrm);
});
formBtns.createProjectBtn.addEventListener('click', function(){
    let input = document.querySelector('#project-name');
    if (!input.value) {
        return;
    };
    formBtnsInts.createNewProject(input);
    render.renderSideBar();
    formBtnsInts.hideFrm(formBtns.newProjectFrm);
});
formBtns.showItemsFrmBtn.addEventListener('click', function(){
    formBtnsInts.showFrm(formBtns.newItemFrm);
    formBtns.newItemFrm.dataset.status = 'new';
});
formBtns.createItemBtn.addEventListener('click', function(){

    let inputTitle = formElements.itemTitle.value;
    let inputDescription = formElements.itemDescription.value;
    let inputDueDate = formElements.itemDueDate.value;
    let inputPriority = formBtnsInts.getPriorityValue(formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    
    if (!inputTitle) {
        return;
    } else if (!inputDueDate) {
        return;
    }

    let activeProject = projectsLogic.getCurrentProject(render.titleDiv.textContent);
    let index = projectsArr.indexOf(activeProject);
    let status = formBtns.newItemFrm.dataset.status;

    if (status === 'new') {
        todoItemsInts.createTodoItem(inputTitle, inputDescription, inputDueDate, inputPriority, activeProject);
    } else if (status === 'edit') {
        let activeItem = activeProject.tasks[formBtns.newItemFrm.dataset.editIndex];
        todoItemsInts.editTodoItem(activeItem, inputTitle, inputDescription, inputDueDate, inputPriority);
    }

    render.renderMain(index);
    formBtnsInts.resetItemFrm(formElements.itemTitle, formElements.itemDescription, formElements.itemDueDate, 
        formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    formBtnsInts.hideFrm(formBtns.newItemFrm);
});
