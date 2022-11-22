/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView');
 const NotesModel = require('./notesModel');
 
 describe('Notes View', () => {
   it('displays two notes added', () => {
     document.body.innerHTML = fs.readFileSync('./index.html');
    
     const model = new NotesModel();
     const view = new NotesView(model);
     
     model.addNote("Test note 1");
     model.addNote("Test note 2");

     view.displayNotes();
      
     expect(document.querySelectorAll('div.note').length).toEqual(2);
   });

   it('adds a note posted by the user', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
   
    const model = new NotesModel();
    const view = new NotesView(model);

    const inputEl = document.querySelector('#add-note-input');
    inputEl.value = 'New note.'
    
    const submitButtonEl = document.querySelector('#post-note-button');
    submitButtonEl.click();

    // view.displayNotes();
    expect(document.querySelectorAll('div.note').length).toEqual(1);
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('New note.');
  });

  it('when displayNotes is called twice, the corerct number of notes are displayed', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
   
    const model = new NotesModel();
    const view = new NotesView(model);

    model.addNote("Test note 1");
    model.addNote("Test note 2");

    view.displayNotes();
    view.displayNotes();
     
    expect(document.querySelectorAll('div.note').length).toEqual(2);

  })

});
 