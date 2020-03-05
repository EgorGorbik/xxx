const Controller = require('./messages.controller');
const {authenticateToken, generateAccessToken, accessTokens} = require('../shared/jwt/index');

function router(app) {
    let controller = new Controller();
    app.post('/chat', (req, res) => controller.addChat(req, res));
    app.get('/chats', authenticateToken, (req, res) => controller.getChats(req, res));
}

module.exports = router;