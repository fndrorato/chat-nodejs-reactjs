// Load Message Model
const Chat = require('../models/Chat');

const saveMessage = (message, username, room) => {
    const data = { room, username, message}

    Chat.create(data)
        .then(chat => console.log(chat))
        .catch(err => console.log(err));    
}

module.exports = saveMessage
