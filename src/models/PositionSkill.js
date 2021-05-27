const mongoose = require('mongoose');
const idValidator = require('mongoose-id-validator');

const { Schema } = mongoose;

const PositionSkill = new Schema({
    skill_name: {
        type: String,
        required: true,
    },
    position_id: {
        type: Schema.Types.ObjectId,
        ref: 'Position'
    }
}, {
    timestamps: true,
    versionKey: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
});

PositionSkill.plugin(idValidator);

module.exports = mongoose.model('PositionSkill', PositionSkill);
