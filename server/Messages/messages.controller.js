const Messages = require('./messages.service');
const Users = require('../User/user.service');

class messagesController {
    constructor() {
        this.messages = new Messages();
        this.users = new Users();
    }

    async addChat(req, res) {
        let chat = await this.messages.addChat(req.body);

    }

    async getChats(req, res) {
        let chats = await this.messages.getChats(req.user.user._id);
        let resultChats = [];

        for(let i = 0; i < chats.length; i++) {
            let interlocutorId = chats[i].usersId.filter(e => e !== req.user.user._id);
            let interlocutor = await this.users.getUserNameById(interlocutorId[0]);
            let chat = {};
            let text = chats[i].messages[chats[i].messages.length - 1].text;
            let isMe = req.user.user._id === chats[i].messages[chats[i].messages.length - 1].auth;
            let time = chats[i].messages[chats[i].messages.length - 1].time;
            let countOnline = chats[i].countOnline;
            let id = chats[i]._id;
            chat.text = text;
            chat.isMe = isMe;
            chat.time = time;
            chat.interlocutor = interlocutor;
            chat.countOnline = countOnline;
            chat.id = id;
            resultChats.push(chat)
        }
        /*for(let i = 0; i < chats.length; i++) {
            let interlocutorId = chats[i].usersId.filter(e => e !== req.user.user._id);
            console.log(interlocutorId)
            chats[i]['interlocutorId'] = interlocutorId[0];
        }
        chats[0].usersI = 'test';*/

        res.json(resultChats);
    }

}

module.exports = messagesController;