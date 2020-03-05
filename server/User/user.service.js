var mongoose = require('../config/model');
require('../User/user.model');

class ServiceAdmin {
    constructor() {
        this.user = mongoose.model('User');
    }

    async getUserByName(name) {
        let user = await this.user.findOne({name});
        return user;
    }

    async getUserNameById(_id) {
        let user = await this.user.findOne({_id});
        return user.name;
    }

    async createUser(data) {
        let user = await new this.user(data);
        user.save();
        return user;
    }
}

module.exports = ServiceAdmin;