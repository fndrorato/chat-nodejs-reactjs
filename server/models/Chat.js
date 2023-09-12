const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema(
    {
        room: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        message: {
            type: String,
            required: true
        }
    },    
    { timestamps: true }
);

module.exports = Chat = mongoose.model('chat', ChatSchema);