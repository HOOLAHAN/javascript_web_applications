/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const NotesView = require('./notesView');
 const NotesModel = require('./notesModel');
const { callbackify } = require('util');
 
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

  //  THE FOLLOWING TEST IS NO LONGER IN USE
  //  it('adds a note posted by the user', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');
   
  //   const model = new NotesModel();
  //   const view = new NotesView(model);

  //   const inputEl = document.querySelector('#add-note-input');
  //   inputEl.value = 'New note.'
    
  //   const submitButtonEl = document.querySelector('#post-note-button');
  //   submitButtonEl.click();

  //   view.displayNotes();
  //   expect(document.querySelectorAll('div.note').length).toEqual(1);
  //   expect(document.querySelectorAll('div.note')[0].textContent).toEqual('New note.');
  // });

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

  it('when displayNotesFromApi is called it displays notes from the API', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const client = {
      loadNotes: (callback) => {
        callback(["testing"])
      }
    };
    const model = new NotesModel();
    const view = new NotesView(model, client);

    view.displayNotesFromApi();

    expect(document.querySelectorAll('div.note').length).toEqual(1)
    expect(document.querySelectorAll('div.note')[0].textContent).toEqual('testing');
  })

  // it('when createNote is called it posts the content from the user input', () => {
  //   document.body.innerHTML = fs.readFileSync('./index.html');

  //   const client = {
  //     createNote: (notes) => {
        
  //     }
  //   }
  // })

});
 
