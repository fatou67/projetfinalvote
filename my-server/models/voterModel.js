

const {Schema, model, types} = require('mongoose');

const votersSchema = new Schema({
    fullName : {type: String, required: true},
    email : {type: String, required: true, unique: true},
    password: {type: String, required: true},
    votedElections: [{type: Schema.Types.ObjectId, ref: 'Election'}],
    isAdmin: { type: Boolean, default: false}
},{ timestamps: true });


module.exports = model('Voter', votersSchema);