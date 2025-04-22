const {Schema, model, Types} = require('mongoose');

const candidateSchema = new Schema({
    fulName: {type: String, required: true},
    image: {type: String, required: true},
    motto: {type: String, required: true},
    voteCount: {type: Number, default: 0},
    election : {type: Types.ObjectId, ref: 'Election'},

})

 
module.exports = model('Candidate', candidateSchema);