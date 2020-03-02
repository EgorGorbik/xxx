const jwt = require('../../config/jwt');

class Token {
    constructor() {
        this.accessTokens = [];
    }

    generateAccessToken(user) {
        return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET);
    }
}

module.exports = Token;