// each project item will have the functionality to be selected and deleted

import { projectsArr, projectsLogic } from "./projects";

const projectInts = {
    deleteProject: 
    function(e) {
        projectsArr.splice(e, 1);
    },
    selectProject:
    function(e) {

        if (!e){
            return projectsArr[0];
        }
        return projectsArr[e];
    },
    deleteItem:
    function(arr, ind) {
        arr.splice(ind, 1);
    }
}

// each todo item will have the functionality to be checked, edited and deleted

// clicking new project in the sidebar will make a form appear which will accept a project name and a submit button
// clicking the submit will do the following
// 1. create a new project object which will have a title property(accepts the input value) and a tasks array
// 2. appends the new project to the projects array
// 3. removes the current sidebar elements and re-renders it
// 4. renders the main content area

const formBtnsInts = {

    showFrm:
    function(frm) {
        frm.removeAttribute('hidden');
    },
    hideFrm:
    function(frm) {
        frm.setAttribute('hidden', true);
    },
    createNewProject:
    function(input) {
        // when create project button is pressed it should:
        // 1. create a new project and push it to projects array
        // 2. clear the input field
        // 3. hide the form
        // 4. re-render the sidebar with the newly created project visible
        projectsLogic.createProject(input.value);
        input.value = ''
    },

    // the main content area will have a new item button which when pressed will render a form that accepts the following inputs:
    // a. title
    // b. description
    // c. due date
    // d. priority
    // e. projects dropdown

    resetItemFrm:
    function(title, desc, date, high, med, low, frm) {
        title.value = '';
        desc.value = '';
        date.value = '';
        high.checked = false;
        med.checked = false;
        low.checked = false
    },
    getPriorityValue:
    function(a, b, c) {
        if (a.checked) {
            return 'high'
        } else if (b.checked) {
            return 'medium'
        } else if (c.checked) {
            return 'low'
        } else {
            return 'low'
        }
    },


};


export {
    projectInts,
    formBtnsInts,
}
