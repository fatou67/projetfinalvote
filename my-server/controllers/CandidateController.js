

//*************ADD CANDIDATE*/
//POST: /api/candidate
// PROTETED (only admin)

const addCandidate = (req, res, next) =>{
    res.json("Add Candidate")
}


//************* GET CANDIDATE*/
//Get: /api/candidate/:id
// PROTETED (only admin)

const getCandidate = (req, res, next) =>{
    res.json("Get Candidate")
}


//************* DELETE  CANDIDATE*/
//Get: /api/candidate/:id
// PROTETED (only admin)

const removeCandidate = (req, res, next) =>{
    res.json(" Delete Candidate")
}


//************* VOTE  CANDIDATE*/
//PATCH: /api/candidate/:id
// PROTETED (only admin)
 
const voteCandidate = (req, res, next) =>{
    res.json(" Vote Candidate")
}


module.exports = {addCandidate, getCandidate, removeCandidate, voteCandidate}   
