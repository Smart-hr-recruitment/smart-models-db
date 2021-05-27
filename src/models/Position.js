const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { Schema } = mongoose;

const Position = new Schema({
    position_name: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

Position.plugin(idValidator);

Position.virtual('skills', {
    ref: 'PositionSkill',
    localField: '_id',
    foreignField: 'position_id',
});

module.exports = mongoose.model('Position', Position);
