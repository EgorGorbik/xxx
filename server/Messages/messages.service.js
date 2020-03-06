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

    async incrementOnlineUser(_id) {
        console.log('increment')
        let chat = await this.messages.find({_id})
        chat[0].countOnline++;
        let newChat = await this.messages.findOneAndUpdate({_id}, chat[0], {new: true});
        return newChat;
    }

    async decrementOnlineUser(_id) {
        let chat = await this.messages.find({_id})
        chat[0].countOnline--;
        let newChat = await this.messages.findOneAndUpdate({_id}, chat[0], {new: true});
        return newChat;
    }
}

module.exports = ServiceMessages;