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
    }
}

export {
    projectsArr,
    projectsLogic
}