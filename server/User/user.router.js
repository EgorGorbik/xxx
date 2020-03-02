const Controller = require('./user.controller');


function router(app) {
    let controller = new Controller();
    app.post('/Login', (req, res) => controller.loginUser(req, res));
    app.post('/registration', (req, res) => controller.registrationUser(req, res));
}

module.exports = router;