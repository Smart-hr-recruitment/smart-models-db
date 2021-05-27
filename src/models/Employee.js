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
        type: String
    },
    position_id: {
        type: String
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
    justOne: true
});

Employee.virtual('skills', {
    ref: 'EmployeeSkill',
    localField: '_id',
    foreignField: 'employee_id'
});

Employee.pre('deleteOne', { document: false, query: true }, async function (next) {
    const doc = await this.model.findOne(this.getFilter());
    await mongoose.model('Position').deleteOne({ employee_id: doc._id }, next);
  });

module.exports = mongoose.model('Employee', Employee);
