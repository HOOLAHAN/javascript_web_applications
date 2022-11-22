class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.buttonEl.addEventListener('click', () => {
      this.displayMessage();
    });
    this.hideButtonEl = document.querySelector('#hide-message-button');
    this.hideButtonEl.addEventListener('click', () => {
      this.hideMessage();
   });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');

    const message = document.querySelector('#message-input').value; // setting the message value to the input of the user

    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = message; 

    document.querySelector('#main-container').append(messageElement); // posting the message to the page

    document.querySelector('#message-input').value = ""; // empty the text box afetr being clicked
  }

  hideMessage() {
    console.log('Lets keep it under wraps');

    document.querySelector('#message').remove();
  }


}

module.exports = MessageView;