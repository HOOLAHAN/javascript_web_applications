const NotesModel = require('./notesModel');
const NotesView = require('./notesView');


console.log("The notes app is running");

const model = new NotesModel();
const view = new NotesView(model);

// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// view.displayNotes();

// console.log(model.getNotes());