const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { emailReg } = require('../utils/regexp');

const { Schema } = mongoose;

const Employee = new Schema({
    full_name: {
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
    position_id: {
        type: String,
        required: true,
    },

}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

Employee.plugin(idValidator);

Employee.virtual('position', {
    ref: 'Position',
    localField: 'position_id',
    foreignField: '_id',
});

Employee.virtual('skills', {
    ref: 'EmployeeSkill',
    localField: '_id',
    foreignField: 'employee_id',
});

module.exports = mongoose.model('Employee', Employee);
