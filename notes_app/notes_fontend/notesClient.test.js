
const NotesClient = require('./notesClient');

// This makes `fetch` available to our test (it is not by default, as normally `fetch` is only
// available within the browser)

require('jest-fetch-mock').enableMocks()

describe('NotesClient class', () => {
  it('calls fetch and loads data', (done) => {
    const client = new NotesClient();
    fetch.mockResponseOnce(JSON.stringify(
      ['Mocked String']
    ));

    client.loadNotes((noteInfo) => {
      expect(noteInfo).toEqual(['Mocked String']);

      // Refer to
      // https://github.com/makersacademy/javascript-fundamentals/blob/main/pills/testing_asynchronous_code.md#testing-callbacks
      // if you're unsure why we are using this done() function.
      done();
    });
  });
});