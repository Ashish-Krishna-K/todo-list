import './style.css';

import { projectsArr, projectsLogic } from './projects';
import { projectInts, formBtnsInts } from './UI';
import { todoItemsInts } from './todo-items';
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { activeUser, storageFunctions  } from './storage';

// when page first loads sidebar and main DOM elements should be rendered

const provider = new GoogleAuthProvider();
const auth = getAuth();

class User {
    constructor(name, email, imageURL, UID) {
        this.name = name,
        this.email = email,
        this.image = imageURL,
        this.id = UID
    }
}

export async function loginFunc() {
    try {
        await signInWithPopup(auth, provider);
    } catch (error) {
        console.log(error)
    }
}

export async function logutFunc() {
    try {
        await signOut(auth);
        location.reload();
    } catch (error) {
        console.log(error);
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user.displayName);
        const presentUser = new User(user.displayName, user.email, user.photoURL, user.uid);
        renderUserDeatils(true, presentUser);
        activeUser.updateActiveUser(presentUser);
        renderContent();
    } else {
        renderUserDeatils(false);
    }
})

const render = {
    
    projectsListDiv: document.querySelector('#projects-list'),
    
    titleDiv: document.querySelector('#project-title'),

    itemsDiv: document.querySelector('#todo-items'),

    renderSideBar: 
    function (projectsArrayFromDB) {

        projectsLogic.replaceProjectsArr(projectsArrayFromDB);
        console.log('sidebar was rendered from memory');

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
            projectDiv.appendChild(deleteProjectBtn);

            allProjectsDiv.appendChild(projectDiv);
            render.projectsListDiv.appendChild(allProjectsDiv);
        });
        const allProjectsList = document.querySelectorAll('.all-projects');

        allProjectsList.forEach(node => node.addEventListener('click', function(e){
            let clickedProjectIndex = e.target.dataset.index;
            renderContent(clickedProjectIndex);
            projectInts.setMainProject(allProjectsList, render.titleDiv.textContent);
        }));

        const delProjectBtns = document.querySelectorAll('#delete-project');
        delProjectBtns.forEach(btn => btn.addEventListener('click', function(){
            let ind = btn.dataset.index;
            if (ind == 0) {
                alert('You cannot delete the home project!');
                return;
            };
            projectInts.deleteProject(ind);
            console.log('a project was deleted');
            storageFunctions.saveToStorage(projectsArr);
            renderContent();
            projectInts.setMainProject(allProjectsList, render.titleDiv.textContent);
        }));
    },

    // main content will render a project tilte(default will be home) and for all the todo items of the project a checkbox will be rendered

    renderMain: 
    function(index, projectsArrayFromDB) {
        console.log(projectsArrayFromDB);
        projectsLogic.replaceProjectsArr(projectsArrayFromDB);
        console.log('items was rendered from memory');

        let a = document.querySelector('#items-parent');

        if (a) {
            render.itemsDiv.removeChild(a);
        }
        
        const allItemsDiv = document.createElement('ul');
        allItemsDiv.setAttribute('id', 'items-parent');
        const currentProject = projectInts.selectProject(index);
        console.log(currentProject);
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
            console.log('an item was deleted');
            storageFunctions.saveToStorage(projectsArr);
            
            let activeProject = projectsLogic.getCurrentProject(render.titleDiv.textContent);
            let index = projectsArr.indexOf(activeProject);
        
            renderContent(index);
            projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
        }));

        const allCheckboxes = document.querySelectorAll('.checkbox');
        allCheckboxes.forEach(btn => btn.addEventListener('click', function(e){
            let status = e.target.checked;
            let label = e.target.nextSibling;
            let activeTask = currentProject.tasks[btn.dataset.index];
            projectInts.checkItem(status, label);

            todoItemsInts.editStatus(activeTask, status);
            console.log('an item completion status was changed');
            storageFunctions.saveToStorage(projectsArr);
        }));
    },

    renderCheckbox:
    function(obj, ind, parent) {
        if (!obj) {
            return;
        }
        const listItem = document.createElement('li');
        listItem.dataset.index = ind;
        
        const box = document.createElement('input');
        box.classList.add('checkbox')
        box.setAttribute('type', 'checkbox');
        box.setAttribute('id', obj.title);
        box.dataset.index = ind;
        box.checked = obj.completed;

        const boxLabel = document.createElement('div');
        boxLabel.setAttribute('id', 'task-display');
        boxLabel.textContent = `task: ${obj.title} is due by: ${obj.dueDate} and has a priority level set to ${obj.priority}`;

        const description = document.createElement('p');
        description.textContent = obj.description;
        description.setAttribute('hidden', true);
        boxLabel.appendChild(description);
                
        boxLabel.addEventListener('click', function(){
            const hidden = description.getAttribute('hidden');

            if (hidden === 'true') {
                description.setAttribute('hidden', false);
                description.style.display = 'block';
            } else {
                description.setAttribute('hidden', true);
                description.style.display = 'none';
            };
        });
        
        const editItemBtn = document.createElement('button');
        editItemBtn.classList.add('edit-item');
        editItemBtn.dataset.index = ind;
        editItemBtn.textContent = '';
        
        const deleteItemBtn = document.createElement('button');
        deleteItemBtn.classList.add('delete-item');
        deleteItemBtn.dataset.index = ind;
        deleteItemBtn.textContent = '';
        
        listItem.appendChild(box);
        listItem.appendChild(boxLabel);
        listItem.appendChild(editItemBtn);
        listItem.appendChild(deleteItemBtn);

        projectInts.checkItem(obj.completed, boxLabel);
        todoItemsInts.setPriorityClass(obj.priority, listItem);

        parent.appendChild(listItem);
    },

}

const formBtns = {
    showProjectFrmBtn: document.querySelector('#new-project'),
    showItemsFrmBtn: document.querySelector('#new-item'),
    createProjectBtn: document.querySelector('#create-project'),
    createItemBtn: document.querySelector('#create-item'),
    newProjectFrm: document.querySelector('#new-project-form'),
    newItemFrm: document.querySelector('#new-item-form'),
    cancelNewItemFrm: document.querySelector('#cancel'),
    cancelNewProjectFrm: document.querySelector('#cancel-project'),
}

const formElements = {
    itemTitle: document.querySelector('#title'),
    itemDescription: document.querySelector('#description'),
    itemDueDate: document.querySelector('#due-date'),
    itemHighPriority: document.querySelector('#high'),
    itemMediumPriority: document.querySelector('#medium'),
    itemLowPriority: document.querySelector('#low')    
}

formBtns.showProjectFrmBtn.addEventListener('click', function(){
    formBtnsInts.showFrm(formBtns.newProjectFrm);
});
formBtns.createProjectBtn.addEventListener('click', function(){
    let input = document.querySelector('#project-name');
    if (!input.value) {
        return;
    };
    formBtnsInts.createNewProject(input);
    console.log('a new project was created');
    storageFunctions.saveToStorage(projectsArr);
    renderContent();
    projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
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
        console.log('a new item was created');
        storageFunctions.saveToStorage(projectsArr);
    } else if (status === 'edit') {
        let activeItem = activeProject.tasks[formBtns.newItemFrm.dataset.editIndex];
        todoItemsInts.editTodoItem(activeItem, inputTitle, inputDescription, inputDueDate, inputPriority);
        console.log('an item was edited');
        storageFunctions.saveToStorage(projectsArr);
    }

    renderContent(index);
    projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
    formBtnsInts.resetItemFrm(formElements.itemTitle, formElements.itemDescription, formElements.itemDueDate, 
        formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    formBtnsInts.hideFrm(formBtns.newItemFrm);
});
formBtns.cancelNewItemFrm.addEventListener('click', function(){
    formBtnsInts.resetItemFrm(formElements.itemTitle, formElements.itemDescription, formElements.itemDueDate, 
        formElements.itemHighPriority, formElements.itemMediumPriority, formElements.itemLowPriority);
    formBtnsInts.hideFrm(formBtns.newItemFrm);
});
formBtns.cancelNewProjectFrm.addEventListener('click', function(){
    let input = document.querySelector('#project-name');
    formBtnsInts.resetProjectFrom(input);
    formBtnsInts.hideFrm(formBtns.newProjectFrm);
});

const loginBtn = document.querySelector('#login-btn');
const logoutBtn = document.querySelector('#logout-btn');
const displayUserDP = document.querySelector('#user-dp');
const displayUserName = document.querySelector('#user-name');
const contentPage = document.querySelector('#content'); 

loginBtn.addEventListener('click', loginFunc);
logoutBtn.addEventListener('click', logutFunc);

export function renderUserDeatils(status, user) {
    if (status) {
        displayUserDP.setAttribute('src', user.image);
        displayUserDP.setAttribute('alt', user.name);
        displayUserDP.classList.remove('hidden');
        formBtns.showProjectFrmBtn.classList.remove('hidden');
        formBtns.showItemsFrmBtn.classList.remove('hidden');
        displayUserName.textContent = user.name;  
        renderContent();
    } else {
        displayUserDP.removeAttribute('src');
        displayUserDP.removeAttribute('alt');
        displayUserDP.classList.add('hidden');
        displayUserName.textContent = '';
        formBtns.showProjectFrmBtn.classList.add('hidden');
        formBtns.showItemsFrmBtn.classList.add('hidden');
    }  
}

async function renderContent(ind) {
    let index = ind || 0;
    const dataFromDB = await storageFunctions.loadFromStorage();

    if (!dataFromDB) {
        storageFunctions.saveToStorage(projectsArr);
        console.log('initial save');
        renderContent();
        return;
    }

    const projectsArrayFromDB = Array.from(dataFromDB);
    console.log(projectsArrayFromDB);
    render.renderSideBar(projectsArrayFromDB);
    console.log(projectsArrayFromDB);
    render.renderMain(index, projectsArrayFromDB); 
    projectInts.setMainProject(document.querySelectorAll('.all-projects'), render.titleDiv.textContent);
}
