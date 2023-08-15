# todo-list

[Live Demo](https://ashish-krishna-k.github.io/todo-list/)

A project to create a basic todo-list built as a part of the JavaScript course of [The Odin Project](https://www.theodinproject.com/). This project is aimed to practice the OOP principles learnt in the preceeding chapters. 

*This project was originally built in my first run of The Odin Project, in a later update I had even set up a firebase clout storage connection to persist the database, that version can be found in the "old" branch [here](https://github.com/Ashish-Krishna-K/todo-list/tree/old). In my second run i'm reworking past projects and this time I opted to use TypeScript as a practice using TS.*

## The Modules

This project is split into multiple modules, with the main attraction being the usage of PubSub(called EventsObserver here) pattern in an attempt to avoid deep coupling of various modules. While PubSub pattern is indeed very useful to avoid coupling, I found it much harder to debug errors while employing this pattern.


### index.ts
The main module, it holds the **todoList** object which itself has the list array where all the projects reside. The module also holds multiple functions which act as the EventsObserver's event handler. At the end of the module, the various event handlers subscribes to their respective events and finally publish a couple events itself.

### eventsObserver.ts
This module holds the **EventsObserver** object that handles all the logic of subscribing to an event and publishing an event

### projectController.ts
This module holds the **Project** and **TodoItem** factory functions, these factories are used to produce objects that holds the project and todo item data respectively. This module also declares the event handlers for various events that is related to directly working on a project's todo Items. As in the case of index.ts it also subscribes to all relevant events at the end of the module.

### storageController.ts
The storageController module only deals with saving the list to localStorage and loading saved data from the localStorage, in the future when a database is integrated, this module is where all the functions related to database actions will rest.

### displayController.ts and domSelectors.ts
This module is tightly coupled with the **domSelectors.ts** module as the domSelectors module is only a helper module. 

The **displayController** module handles the majority of logic related to rendering the UI and also most of the interactivity of the UI. As with other modules, at the end of the module the various functions will subscribe to the events on which it depends.

The **domSelectors** modules only responsibility is to export the functions that return a specific DOM Element. This is a smart(atleast for me) hack I came up with to circumvent the issue of any DOM element not being rendered at runtime if it's declared as a variable. Instead by using a function that returns the DOM element, then we're guaranteed the DOM element is rendered and returned accordingly(assuming the function itself is called at the right time).

### displayComponents.ts

This module simply holds those JavaScript rendered components which are insanely huge to be included in other modules, hence I have extracted those components into it's own module. Although I have avoided including any logic involved in rendering of these components to the maximum degree, I took a decision to attach few eventListeners to some elements in this module as I thought it would be best to attach those event listeners during the rendering of the DOM element in question.

### generalTypes.ts

Due to my inexperience with TypeScript, I couldn't handle most of errors that arose as a result of passing around all sorts of data in the EventsObserver's subscribe and publish methods, to handle those errors I resorted to declaring a type for each and every scenario(this in my opinion is the wrong way to handle this) all those types are housed in this module.

## The App Flow.

On the initial load of the page, the index.ts module publishes an event to check the localStorage, the storageController checks the localStorage and responds with the saved data if it's found, if not it will fire an event stating there was no saved data. If there's no saved data then a new default project is created and is appended to the todoList, if there was a saved data found then the list is replaced with the saved data. Similarly all user interactions is handled by firing appropriate events through the EventsObserver object.

## Future plans

As of now there's no validation of user inputs is being conducted this allows users to just submit a blank form, which is not at all the correct procedure. Future plan is to include validation and making better use of the error section(right now it's only displaying an error when user tries to delete the default project)

This project can be simplified by multiple times by utilizing a front end framework. However this is also a huge undertaking for vanilla JS as such I have decided to not use any frameworks to improve the front-end. However a todo list is a good project to build while learning so while I may build other todo-lists whenever I'm learning any frameworks in future, this particular project will remain in vanilla JS.