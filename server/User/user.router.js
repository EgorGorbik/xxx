const Controller = require('./user.controller');
const {authenticateToken, generateAccessToken, accessTokens} = require('../shared/jwt/index');

function router(app) {
    let controller = new Controller();
    app.post('/login', (req, res) => controller.loginUser(req, res));
    app.post('/registration', (req, res) => controller.registrationUser(req, res));
    app.get('/user', authenticateToken, (req, res) => controller.getUser(req, res));
}

module.exports = router;