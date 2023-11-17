const socket = io('http://localhost:3001');

const messages = [];

const $ = document.getElementById.bind(document);

const form = document.querySelector('form');
const messagesArea = $('messages-area');

socket.once('previousMessages', (messages) => {
  messages.forEach((message) => printMessage(message));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const userName = $('user-name').value;
  const message = $('message').value;
  const messageObject = { userName, text: message };
  socket.emit('sendNewMessage', messageObject);
  printMessage(messageObject);
});

const printMessage = (messageObject) => {
  const { userName, text } = messageObject;
  
  const htmlContent = `
    <p>
      <strong>${userName}</strong>: ${text}
    </p>
  `;

  messagesArea.insertAdjacentHTML('beforeend', htmlContent);
}

socket.on('messageReceived', (messageObject) => printMessage(messageObject));

