const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { Schema } = mongoose;

const VacancySkill = new Schema({
    skill_name: {
        type: String,
        required: true,
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

VacancySkill.plugin(idValidator);

module.exports = mongoose.model('VacancySkill', VacancySkill);
