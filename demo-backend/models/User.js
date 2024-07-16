const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    image:String
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;