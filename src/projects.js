import storageFunctions from './storage';

const projectsArr = [];

class NewProject {
    constructor(title) {
        this.title = title;
        this.tasks = []
    }
};

projectsArr.push(new NewProject('Home'));


const projectsLogic = {
    createProject:
    function (title) {
        projectsArr.push(new NewProject(title));
    },
    getCurrentProject:
    function(name) {
        let newArr = projectsArr.filter((project) => {
            if (project.title === name) {
                return true;
            }
        });
        return newArr[0];
    },
    replaceProjectsArr: 
    function(projectsFromDB) {
        console.log(projectsFromDB);
        projectsArr.splice(0, projectsArr.length, ...projectsFromDB)
    }
}

export {
    projectsArr,
    projectsLogic
}