//DOM queries
const chatList = document.querySelector('.message-list');
const newChatForm = document.querySelector('.message-form');
const newNameForm = document.querySelector('.name-form');
const updateMssg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms');

//add a new chat
newChatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const message = newChatForm.addChat.value.trim()

  if (message) {
    chatroom.addChat(message)
      .then(() => newChatForm.reset())
      .catch((err) => console.log(err));
  };
});

//update a username
newNameForm.addEventListener('submit', e => {
  e.preventDefault();
  const newName = newNameForm.name.value.trim();

  if (newName) {
    chatroom.updateName(newName);
    newNameForm.reset()

    updateMssg.innerText = `${newName} is your new name!`
    setTimeout(() => updateMssg.innerText = '', 3000);
  }
});

//check local storage for a username or last room
const username = localStorage.username ? localStorage.username : 'anon';
const room = localStorage.room ? localStorage.room : 'general';

//change room
rooms.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    chatUI.clear();
    chatroom.updateRoom(e.target.id);

    // u need to reinitalize getChats method
    chatroom.getChats(data => {
      chatUI.render(data);
    });
  }
});

//class instances
const chatUI = new ChatUI(chatList);
let chatroom = new Chatroom(room, username);

//get chats and render
chatroom.getChats(data => {
  chatUI.render(data);
});