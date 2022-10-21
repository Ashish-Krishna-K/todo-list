import './style.css';
import { projectsArr, projectsLogic } from './projects';
import { projectInts, formBtnsInts } from './UI';
import { createTodoItem } from './todo-items';

// when page first loads sidebar and main DOM elements should be rendered

const render = {
    
    projectsListDiv: document.querySelector('#projects-list'),
    
    titleDiv: document.querySelector('#project-title'),

    itemsDiv: document.querySelector('#todo-items'),

    renderSideBar: 
    function () {
        const allProjectsDiv = document.createElement('div');
        allProjectsDiv.setAttribute('id', 'projects-parent');

        if (render.projectsListDiv.hasChildNodes()) {
            render.projectsListDiv.removeChild(document.querySelector('#projects-parent'));
        }

        // sidebar will iterate over projects array and render a element for each project

        projectsArr.forEach((project) => {
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('all-projects');
            projectDiv.dataset.index = projectsArr.indexOf(project);
            projectDiv.dataset.name = project.title;
            projectDiv.textContent = project.title;

            allProjectsDiv.appendChild(projectDiv);
            render.projectsListDiv.appendChild(allProjectsDiv);
        });

        allProjectsDiv.childNodes.forEach(node => node.addEventListener('click', function(e){
            let clickedProjectIndex = e.target.dataset.index;
            render.renderMain(clickedProjectIndex);
        }))
    },

    // main content will render a project tilte(default will be home) and for all the todo items of the project a checkbox will be rendered

    renderMain: 
    function(index) {
        const allItemsDiv = document.createElement('div');
        allItemsDiv.setAttribute('id', 'items-parent');
        let currentProject = projectInts.selectProject(index);

        render.titleDiv.textContent = currentProject.title;
        currentProject.tasks.forEach(task => render.renderCheckbox(task, allItemsDiv));
        render.itemsDiv.appendChild(allItemsDiv);
    },

    renderCheckbox:
    function(obj, parent) {
        if (!obj) {
            return;
        }
        const box = document.createElement('input');
        box.setAttribute('type', 'checkbox');
        box.setAttribute('id', obj.title);
        const boxLabel = document.createElement('label');
        boxLabel.setAttribute('for', obj.title);
        boxLabel.textContent = obj.title;
        parent.appendChild(box);
        parent.appendChild(boxLabel);
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
    console.log(projectsArr);
    formBtnsInts.hideFrm(formBtns.newProjectFrm);
});
formBtns.showItemsFrmBtn.addEventListener('click', function(){
    formBtnsInts.showFrm(formBtns.newItemFrm);
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

    createTodoItem(inputTitle, inputDescription, inputDueDate, inputPriority, activeProject);
    render.renderMain();
    formBtnsInts.resetItemFrm(formElements.itemTitle, formElements.itemDescription, formElements.itemDueDate, formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority, formBtns.newItemFrm)
});
