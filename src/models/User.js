const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { emailReg } = require('../utils/regexps');

const { Schema } = mongoose;

const User = new Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        lowercase: true,
        type: String,
        required: true,
        match: [emailReg, 'Please provide a valid email'],
        unique: true,
    },
    phone: {
        type: Number,
    },

    profile_picture: {
        type: String,
    },

    is_admin: {
        type: Boolean,
        required: true,
        default: false,
    },

}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

User.plugin(idValidator);

module.exports = mongoose.model('User', User);
