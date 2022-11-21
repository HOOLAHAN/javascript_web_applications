const NotesModel = require("./notesModel");

describe('NotesModel', () => {
  it('returns an empty list of notes', () => {
    const model = new NotesModel();
    expect(model.getNotes()).toEqual([]);
  });
  it('lets the user add notes to the list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual([ "Buy milk", "Go to the gym" ]);
  })
  it('lets the user reset the notes list', () => {
    const model = new NotesModel();
    model.addNote('Buy milk');
    model.addNote('Go to the gym');
    expect(model.getNotes()).toEqual([ "Buy milk", "Go to the gym" ]);
    model.reset();
    expect(model.getNotes()).toEqual([]);
  })

})