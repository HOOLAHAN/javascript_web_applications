class NotesModel {

  constructor() {
    this.notes = [];
  }

  setNotes(notes) {
    this.notes = notes;
  }
  
  getNotes() {
    return this.notes ;
  }

  addNote(title) {
    this.notes.push(title);
  }

  reset() {
    this.notes = [] ;
  }

}

module.exports = NotesModel;