const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const userRouter = require('./User/user.router')
const cors = require('cors')


app.use(bodyParser.json());
app.use(cors());

let accessTokens = [];

app.get('/post', authenticateToken, (req, res) => {
    res.json(req.user)
})

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

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    if(!accessTokens.find(e => e === token)) return res.sendStatus(403);

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if(err) return res.sendStatus(403)
        req.user = user;
        next();
    })
}

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
}

userRouter(app)

app.listen(5000)