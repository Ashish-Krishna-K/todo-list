const storageFunctions = {
    saveToStorage:
    function(data) {
        let savedString = JSON.stringify(data);

        if (localStorage.getItem('projects-array')) {
            localStorage.removeItem('projects-array');
        };

        localStorage.setItem('projects-array', savedString);

        console.log(`An item was SAVED to localStorage, please check application tab for details`)
    },
    loadFromStorage:
    function(){
        let loadedString = localStorage.getItem('projects-array');
        
        console.log(`An item was loaded from localStorage`);

        return JSON.parse(loadedString);
    }
}

export default storageFunctions;