class NotesView {
  constructor(model, notesClient) {
    this.model = model;
    this.notesClient = notesClient;
    this.mainContainerEl = document.querySelector('#main-container');
    this.submitButtonEl = document.querySelector('#post-note-button');
    this.submitButtonEl.addEventListener('click', () => {
      const message = document.querySelector('#add-note-input').value;
      this.addNewNote(message);
    })
    this.resetButtonEl = document.querySelector('#reset-notes-button');
    this.resetButtonEl.addEventListener('click', () => {
      this.resetAllNotes();
    })
  };

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
      this.notesClient.createNote(message, () => {
        this.displayNotesFromApi()
      } , () => {
        this.displayPostingError()
      });
      document.querySelector('#add-note-input').value = ""; // empties the text box after being clicked
    };

    displayNotesFromApi() {
      this.notesClient.loadNotes(data => {
        this.model.setNotes(data)
        this.displayNotes();
      }, () => {
        this.displayError();
      });
    };

    displayError() {    
      const errorMessage = document.createElement("div");
      errorMessage.textContent = "Oops something went wrong, server not connected!";
      errorMessage.className = "error";
      this.mainContainerEl.append(errorMessage);
    };

    displayPostingError() {    
      const errorMessage = document.createElement("div");
      errorMessage.textContent = "Oops something went wrong posting your message!";
      errorMessage.className = "error";
      this.mainContainerEl.append(errorMessage);
    };

    resetAllNotes() {
      this.notesClient.resetNotes(() => {
        this.displayNotesFromApi()
      }, () => {
        this.displayError()
      });
    };

}

module.exports = NotesView;