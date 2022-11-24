const NotesClient = require('./notesClient');
const NotesModel = require('./notesModel');
const NotesView = require('./notesView');


console.log("The notes app is running");

const client = new NotesClient();
const model = new NotesModel();
const view = new NotesView(model, client);

console.log(view.displayNotesFromApi())
view.displayNotes();
view.displayNotesFromApi();
// view.displayError();


// model.addNote('Buy milk');
// model.addNote('Go to the gym');

// view.displayNotes();

// console.log(model.getNotes());