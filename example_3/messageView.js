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
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerText = 'This is a message';

    document.querySelector('#main-container').append(messageElement);
  }

  hideMessage() {
    console.log('Lets keep it under wraps');

    document.querySelector('#message').remove();
  }


}

module.exports = MessageView;