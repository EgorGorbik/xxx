const User = require('./user.service');
const Jwt = require('../shared/jwt/index');

class userController {
    constructor() {
        this.user = new User();
        this.jwt = new Jwt();
    }

    async loginUser(req, res) {
        let user = await this.user.getUserByName(req.body.name);
        if(user) {
            if(req.body.password !== user.password) {
                res.status(400).send({ error: "Wrong password" });
            } else {
                let accessToken = this.jwt.generateAccessToken(user);
                this.jwt.accessTokens.push(accessToken);
                res.json({ accessToken });
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
            let accessToken = this.jwt.generateAccessToken(newUser);
            this.jwt.accessTokens.push(accessToken);
            res.json({ accessToken })
        } catch (e) {
            res.send(e.message)
        }
    }
}

module.exports = userController;