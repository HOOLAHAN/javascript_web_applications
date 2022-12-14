/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button and displays the message typed by user', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    const buttonEl = document.querySelector('#show-message-button');
    const inputEl = document.querySelector('#message-input');
    inputEl.value = 'Test message.';

    buttonEl.click();

    expect(document.querySelector('#message')).not.toBeNull();
    expect(document.querySelector('#message').innerText).toEqual('Test message.');
  });

  it('Hide the message button', () => {
    // arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();

    // act
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();

    // assert
    expect(document.querySelector('#message')).toBeNull();
  });

});