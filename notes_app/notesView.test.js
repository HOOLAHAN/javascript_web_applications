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
 });
 
