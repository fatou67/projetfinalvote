const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const VoterModel = require('../models/voterModel')
const httpError = require('../models/ErrorModal')

//*************REGISTER NEW VOTER */
//POST: /api/voters/register
// UNPROTECTED

const registerVoter =  async(req, res, next) => {
  try {
    const {fullName, email, password,  password2 } = req.body;
    if(!fullName || !email || !password || !password2) {
      return next(new httpError('Fill in all fields', 422));
    }
    // MAKE all emails lowercased
    const newEmail = email.toLowerCase();
    // check if email already exists in db
    const emailExists = await VoterModel.findOne({email: newEmail});
    if(emailExists) {
      return next(new httpError('Email already exists', 422));
    }
    // make sure password 6+ characters
    if (password.trim().length < 6)  {
      return next(new httpError('Password must be at least 6 characters', 422));
    }
    // make sure passwords match
    if (password !== password2) {
      return next(new httpError('Passwords do not match', 422));
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // no user/voter should be admin except for one with email "achiever@gmail.com"
    let isAdmin = false;
    if(newEmail === "achiever@gmail.com") {
      isAdmin = true;
    }
    // save new voter to db
    const newVoter =  await VoterModel.create({
      fullName,
      email: newEmail,
      password: hashedPassword,
      isAdmin
    });
    res.status(201).json({ message: `New voter ${fullName} created.` });

  } catch (error) {
    return next(new httpError("Voter registration failed", 422));
  }
}

// Function to generate token
const generateToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET,{expiresIn: "1d"})
  return token;
}

//*************LOGIN NEW VOTER END
//post: /api/voters/login
// UNPROTECTED

const loginVoter = async(req, res, next) => {
  try {
    const { email, password} = req.body;
    if (!email || !password) {
      return next(new httpError('Fill in all fields', 422));
    }
    // fetch voter by email
    const voter = await VoterModel.findOne({email: email.toLowerCase()});
    if (!voter){
      return next(new httpError('Invalid email or password', 401));
    }
    //compare password
    const comparePass = await bcrypt.compare(password, voter.password);
    if (!comparePass) {
      return next ( new httpError('Invalid email or password', 401));
    }
    const {id, isAdmin, votedElections} = voter;
    const token = generateToken({id, isAdmin, votedElections});

    res.json({token, id, votedElections, isAdmin});
  } catch (error) {
    return next(new httpError("couldn't get voter" , 404));
  }
}

//************* Get VOTER
//GET: /api/voters/:id
// PROTECTED

const getVoter = async(req, res, next) => {
  try {
    const {id} = req.params;
    const voter = await VoterModel.findById(id).select("-password");
    if (!voter) {
      return next(new httpError("Voter not found", 404));
    }
    res.json(voter);
  } catch (error) {
    return next(new httpError("couldn't get voter" , 404));
  }
}

module.exports = { registerVoter, loginVoter, getVoter };
