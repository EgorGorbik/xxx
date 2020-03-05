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

    socket.on('join', async (id) =>  {
        console.log(id)
        let messages = await chats.getChats(id)
        console.log(messages)
    })

    socket.on('disconnect', () => {
        console.log('User had left!')
    })
})