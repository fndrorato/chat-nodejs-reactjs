const Chat = require('../models/Chat');

const getMessages = async (room) => {
    
    const rows = await Chat.find({ 'room': room }, 'room username message createdAt').exec();
    console.log('return get messages => ', JSON.stringify(rows))
    return JSON.stringify(rows);
}

module.exports = getMessages