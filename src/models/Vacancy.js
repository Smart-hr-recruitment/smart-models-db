const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { Schema } = mongoose;

const Vacancy = new Schema({
    vacancy_name: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

Vacancy.plugin(idValidator);

Vacancy.virtual('skills', {
    ref: 'VacancySkill',
    localField: '_id',
    foreignField: 'vacancy_id',
});

module.exports = mongoose.model('Vacancy', Vacancy);
