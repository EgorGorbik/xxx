var mongoose = require('../config/model');

var messagesSchema = new mongoose.Schema({
    usersId: Array,
    messages: Array
});

mongoose.model('Messages', messagesSchema);