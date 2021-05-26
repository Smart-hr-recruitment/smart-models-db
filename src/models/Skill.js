const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { Schema } = mongoose;

const Skill = new Schema({
    skill_name: {
        type: String,
        required: true,
    },
    position_id: {
        type: Schema.Types.ObjectId,
        ref: 'Position'
    },
    vacancy_id: {
        type: Schema.Types.ObjectId,
        ref: 'Vacancy'
    } 
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

Skill.plugin(idValidator);

module.exports = mongoose.model('Skill', Skill);
