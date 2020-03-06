var mongoose = require('../config/model');

var messagesSchema = new mongoose.Schema({
    usersId: Array,
    messages: Array,
    countOnline: Number
});

mongoose.model('Messages', messagesSchema);