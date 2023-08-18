// functions for selecting all necessary dom elements, we're doing this because if we instead declare them
// as variables, the selector will return undefined if the dom element is not yet rendered, by instead turning
// it to a function we can query them on runtime avoiding the chances of the variable being undefined.

const getProjectsSection = () => document.querySelector('div#projects-section') as HTMLElement;
const getTodosSection = () => document.querySelector('div#todos-section') as HTMLElement;
const getTodoContainer = () => document.querySelector('ul.todo-container') as HTMLElement;
const getAddProjectBtn = () => document.querySelector('button.add-project') as HTMLButtonElement;
const getCancelAddProjectBtn = () => document.querySelector('button.cancel-add-project') as HTMLButtonElement;
const getAddTodoModal = () => document.querySelector('div#todo-form-section>div.modal') as HTMLButtonElement;
const getAddTodoBtn = () => document.querySelector('button.add-todo') as HTMLButtonElement;
const getCancelAddTodoBtn = () => document.querySelector('button.cancel-add-todo') as HTMLButtonElement;
const getProjectFrm = () => document.querySelector('form#add-project-form') as HTMLFormElement;
const getTodoFrm = () => document.querySelector('form#add-todo-form') as HTMLFormElement;
const getEditTodoSection = () => document.querySelector('div#edit-todo-form-section') as HTMLElement;
const getEditTodoFrm = () => document.querySelector('form#edit-todo-form') as HTMLFormElement;
const getCancelEditTodoBtn = () => document.querySelector('button.cancel-edit-todo') as HTMLButtonElement;
const getErrorSection = () => document.querySelector('div#errors-section') as HTMLElement;
const getErrorMsgDisplay = () => document.querySelector('p.error-msg') as HTMLParagraphElement;
const getDismissErrorBtn = () => document.querySelector('button.dismiss-error') as HTMLButtonElement;
const getProjectControls = (parent: HTMLElement) => parent.querySelector('div.project-controls-section') as HTMLElement;
const getDateInput = () => getTodoFrm().querySelector('input[type="date"]') as HTMLInputElement;
const getEditProjectNameFrms = () => document.querySelectorAll('form#edit-project-form');

export {
    getProjectsSection,
    getTodosSection,
    getTodoContainer,
    getAddProjectBtn,
    getCancelAddProjectBtn,
    getAddTodoBtn,
    getCancelAddTodoBtn,
    getProjectFrm,
    getTodoFrm,
    getEditProjectNameFrms,
    getEditTodoSection,
    getEditTodoFrm,
    getCancelEditTodoBtn,
    getErrorSection,
    getErrorMsgDisplay,
    getDismissErrorBtn,
    getAddTodoModal,
    getProjectControls,
    getDateInput
}