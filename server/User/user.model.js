var mongoose = require('../config/model');

var userSchema = new mongoose.Schema({
    name: String,
    password: String,
    token: String
});

mongoose.model('User', userSchema);