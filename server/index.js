const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./User/user.router')
const messagesRouter = require('./Messages/messages.router')
const cors = require('cors');
const socket = require('socket.io');


app.use(bodyParser.json());
app.use(cors());

let accessTokens = [];

/*app.get('/post', authenticateToken, (req, res) => {
    res.json(req.user)
})*/

/*app.post('/Login', (req, res) => {
    const username = req.body.username;
    const user = { name: username };

    const accessToken = generateAccessToken(user);
    accessTokens.push(accessToken)
    res.json({ accessToken })
})*/

app.delete('/logout', (req, res) => {
    accessTokens = accessTokens.filter(token => token !== req.body.token);
    res.sendStatus(204)
})



userRouter(app)
messagesRouter(app)

const server = app.listen(5000);
const io = socket(server);


const Messages = require('./Messages/messages.service');
let chats = new Messages();

io.on('connection', socket => {
    console.log('We have a new connection!')
    let userId;

    socket.on('join', async (id) =>  {
        userId = id;
        console.log('join')
        console.log(id)
        let messages = await chats.getChats(id)
        messages.forEach(e => {
            console.log(e)
            socket.join(e._id)
            chats.incrementOnlineUser(e._id);
            //let count = Object.keys(socket.adapter.rooms[e._id].sockets).length
            //console.log(count)
            //let isOnline = (count === 2);
            //socket.broadcast.to(e._id).emit('message', {id: e._id, isOnline})
            socket.to(e._id).emit('addUser', e._id)
        })
    })

    socket.on('disconnect', async () => {
        console.log('disconnect')
        console.log('User had left!')
        let messages = await chats.getChats(userId)
        messages.forEach(e => {
            chats.decrementOnlineUser(e._id);
            //let count = Object.keys(socket.adapter.rooms[e._id].sockets).length
            //console.log(count)
            //let isOnline = (count === 2);
            //socket.broadcast.to(e._id).emit('message', {id: e._id, isOnline})
            socket.to(e._id).emit('dellUser', e._id)
        })
    })
})
