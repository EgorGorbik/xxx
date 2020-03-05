const jwt = require('../../config/jwt');

accessTokens = [];

function generateAccessToken(user) {
    return jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET);
}

function authenticateToken(req, res, next) {
    console.log(accessTokens)
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1];
        if(token == null) return res.sendStatus(401);
        if(!accessTokens.find(e => e === token)) return res.sendStatus(403);

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if(err) return res.sendStatus(403)
            req.user = user;
            next();
        })
    console.log('bottom')
}

module.exports = {authenticateToken, generateAccessToken, accessTokens}



