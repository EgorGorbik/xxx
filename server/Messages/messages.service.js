var mongoose = require('../config/model');
require('../Messages/messages.model');

class ServiceMessages {
    constructor() {
        this.messages = mongoose.model('Messages');
    }

    async addChat(data) {
        let chat = await new this.messages(data);
        chat.save();
        return chat;
    }

    async getChats(id) {
        let chats = await this.messages.find({usersId: {"$in": [id]}});
        return chats;
    }
}

module.exports = ServiceMessages;