const User = require('./user.service');
const {generateAccessToken, accessTokens} = require('../shared/jwt/index');
class userController {
    constructor() {
        this.user = new User();
    }

    async loginUser(req, res) {
        let user = await this.user.getUserByName(req.body.name);
        if(user) {
            if(req.body.password !== user.password) {
                res.status(400).send({ error: "Wrong password" });
            } else {
                let accessToken = generateAccessToken(user);
                console.log(accessToken)
                accessTokens.push(accessToken);
                res.json({ accessToken, name: user.name, password: user.password });
            }
        } else {
            res.status(400).send({ error: "Wrong username" });
        }
        console.log(user)
    }

    async registrationUser(req, res) {
        try {
            let user = await this.user.getUserByName(req.body.name);
            if(user) return 'user exist';
            let newUser = await this.user.createUser(req.body);
            let accessToken = generateAccessToken(newUser);
            accessTokens.push(accessToken);
            res.json({ accessToken, name: newUser.name, password: newUser.password })
        } catch (e) {
            res.send(e.message)
        }
    }
    async getUser(req, res) {
        try {
            res.json(req.user.user)
        } catch (e) {
            console.log(e.message)
            res.send(e.message)
        }
    }

}

module.exports = userController;