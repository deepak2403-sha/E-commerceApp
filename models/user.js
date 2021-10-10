const mongoose = require('mongoose');

const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', 'userSchema');


module.exports = User;