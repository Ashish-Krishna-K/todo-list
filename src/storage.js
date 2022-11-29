import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDj1epMJSw8oiddaUPYdMn_7grAOAZLyU",
    authDomain: "odin-todolist.firebaseapp.com",
    projectId: "odin-todolist",
    storageBucket: "odin-todolist.appspot.com",
    messagingSenderId: "260844283930",
    appId: "1:260844283930:web:9f26ba58bb7df59939c9a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const activeUser = {
    userDetails: null,
    updateActiveUser: function(user) {
        console.log(user);
        this.userDetails = user
    }, 
}

const storageFunctions = {
    saveToStorage:
    function(data) {
        let savedString = JSON.stringify(data);
        if (localStorage.getItem('projects-array')) {
            localStorage.removeItem('projects-array');
        };

        localStorage.setItem('projects-array', savedString);

        console.log(`An item was SAVED to localStorage, please check application tab for details`);

        data.forEach(project => writeToDB(project));
    },
    loadFromStorage:
    async function(){
        let loadedString = localStorage.getItem('projects-array');
        const projectsArrayFromDB = [];
        const readData = await getDocs(collection(db, activeUser.userDetails.email));
        readData.forEach(item => projectsArrayFromDB.push(item.data()));
        if (readData.empty) {
            console.log(`An item was loaded from localStorage`);
            return JSON.parse(loadedString)
        };
        console.log('data was retreived from DB');
        return projectsArrayFromDB;
    },
    deleteFromStorage:
    async function(toDelete){
        const [ project ] = toDelete;
        await deleteDoc(doc(db, activeUser.userDetails.email, project.title));
    }
}

async function writeToDB(data) {
    await setDoc(doc(db, activeUser.userDetails.email, data.title), Object.assign({}, data));
    console.log('saved to Database')
}

export { activeUser, storageFunctions };