var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27018/chat', {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});


module.exports = mongoose;