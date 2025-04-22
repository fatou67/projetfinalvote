const {Schema, model, Types} = require('mongoose');

const electionSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    thumbnail: {type: Date, required: true},
    candidates: [{type: Schema.Types.ObjectId, ref: 'Candidate'}],
    voters: [{type: Schema.Types.ObjectId, ref: 'Voter'}],
})

module.exports = model('Election', electionSchema);