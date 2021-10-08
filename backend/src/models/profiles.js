const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pofileSchema = Schema({

    user_name: {
        type: String
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String,
    },
    postal_code: {
        type: String
    },
    about: {
        type: String
    },
    f_name: {
        type: String,
        required: true
    },
    l_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone_number: {
        type: String
    },
    dob: {
        type: String
    }
});

const Profile = mongoose.model('Profile', pofileSchema);

module.exports = Profile;