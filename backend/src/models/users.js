const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema =  Schema({
    user_profile_id: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;