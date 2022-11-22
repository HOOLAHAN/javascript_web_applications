class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainerEl = document.querySelector('#main-container');
    this.submitButtonEl = document.querySelector('#post-note-button');
    this.submitButtonEl.addEventListener('click', () => {
      this.addNewNote();
    });
    console.log(this.mainContainerEl);
    }

    displayNotes() {
      // document.querySelectorAll(".note").forEach((note).remove());
      const notes = this.model.getNotes();

      notes.forEach((note) => {
        const newNote = document.createElement("div");
        newNote.textContent = note;
        newNote.className = "note";
        this.mainContainerEl.append(newNote);
      });
    }

    addNewNote() {
      const message = document.querySelector('#add-note-input').value;
      this.model.addNote(message);
      this.displayNotes();
      document.querySelector('#add-note-input').value = ""; // empty the text box afetr being clicked
    };



}

module.exports = NotesView;