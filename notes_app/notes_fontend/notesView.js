class NotesView {
  constructor(model, notesClient) {
    this.model = model;
    this.notesClient = notesClient;
    this.mainContainerEl = document.querySelector('#main-container');
       
    this.submitButtonEl = document.querySelector('#post-note-button');
    this.submitButtonEl.addEventListener('click', () => {
      const message = document.querySelector('#add-note-input').value;
      this.addNewNote(message);
      this.notesClient.createNote(message, () => {
        this.displayError()
      });
    });
    
    
    console.log("Don't Worry, Be Happy");
  }

    displayNotes() {
      document.querySelectorAll(".note").forEach(element => {
        element.remove();
      });    
            
      const notes = this.model.getNotes();
      
      notes.forEach((note) => {
        const newNote = document.createElement("div");
        newNote.textContent = note;
        newNote.className = "note";
        this.mainContainerEl.append(newNote);
      });
    };

    addNewNote(message) {
      this.model.addNote(message);
      this.displayNotes();
      document.querySelector('#add-note-input').value = ""; // empty the text box after being clicked
    };

    displayNotesFromApi() {
      this.notesClient.loadNotes(data => {
        this.model.setNotes(data)
        this.displayNotes();
      }, () => {
        this.displayError()
      });
    };

    displayError() {    
      const errorMessage = document.createElement("div");
      errorMessage.textContent = "Oops something went wrong!";
      errorMessage.className = "error";
      this.mainContainerEl.append(errorMessage);
    };

}

module.exports = NotesView;