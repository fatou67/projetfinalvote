const {v4: uuid} = require( 'uuid')



const addElection =  async (req, res, next) => {
    // only admins can add new elections
     // if (!req.user. isAdmin) {
      //  return next (new httpError("only an admin can perform this action",403))
     // }
    
     const { title, description } = req.body;
     if (title  || !description) {
        return next(new httpError("fill all fields", 422));
     }
      if (!req.files.thumbnail) {
        return next (new httpError ("choose thumbnail", 422))
      }
      const {thumbnail} = req.files;
      // image should be less than 
      if (thumbnail.size > 1000000)
        return next (new httpError("file  size too big. should be less than 1mb",));
    // rename the image 
    let fileName = thumbnail.name
    fileName = fileName.split("")
    fileName = fileName[0] + uuid() + "." + fileName [fileName.length - 1]
    // upload file to uploads folder in project 
   await thumbnail.mv(path.join(__dirname, '..', 'uploads', fileName), async () => {
        if(err) {
         return next(new httpError(err));
        }
   })
  
   

   }
    
   

   //*************Get all ELECTION */
//POST: /api/elections
// PROTETED (only admin)

const getElections = async (req, res) => {
    res.json("Get Election"); 
   }
   

   //*************ADD NEW ELECTION */
//get: /api/elections/id
// PROTETED (only admin)

const getElection =  async(req, res) => {
    res.json("get single Election"); 
   }
   
   //*************Get elections Candidates */
//get: /api/elections/:id  Candidates
// PROTETED (only admin)

const getCandidateoftElection = async (req, res) => {
    res.json("get Candidate of Election"); 
   }


   //*************Get Votes of ELECTION */
//get: /api/elections/:id  Voters
// PROTETED 

const getElectionVoters =   async(req, res) => {
    res.json("get  Election voters"); 
   }

     //*************UPDATE  Election  */
//PATCH: /api/elections/:id  Voters
// PROTETED 

const updateElection = async(req, res) => {
    res.json("delete election"); 
   }



     //*************Delete  election  */
//get: /api/elections/:id  
// PROTETED 

const removeElection =  async(req, res) => {
    res.json("delete election"); 
   }


 module.exports = {addElection, getElections, getElection, updateElection, removeElection,  getCandidateoftElection, getElectionVoters }  
