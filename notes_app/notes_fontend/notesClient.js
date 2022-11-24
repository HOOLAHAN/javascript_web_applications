class NotesClient {
  loadNotes(callback, displayError) {
    fetch('http://localhost:3000/notes')
      .then(response => response.json())
      .then(data => {
        callback(data)
      })
      .catch((error) => {
        displayError();
      })
  }

  createNote(notes, displayNotesFromApi, displayError) {
    const noteData = { "content": notes }
    fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(noteData) 
    })
    .then(() => {
      displayNotesFromApi();
    })
    .catch((error) => {
      displayError();
    });
  } 
}

module.exports = NotesClient;



// curl -XPOST http://localhost:3000/notes -H 'content-type: application/json' -d '{ "content": "Remember to reflect on my progress this week!" }' 