const {Router} = require('express');
const { registerVoter, loginVoter, getVoter } = require('../controllers/voterControllers.js');

const { addElection, getElections, getElection, updateElection, removeElection, getCandidateoftElection, getElectionVoters } = require('../controllers/electionController.js');
const {addCandidate, getCandidate, removeCandidate, voteCandidate}  = require('../controllers/candidateController.js');

const router = Router();

router.post('/voters/register', registerVoter);
router.post('/voters/login', loginVoter);
router.post('/voters/id', getVoter);

router.post('/elections', addElection);
router.get('/elections', getElections);
router.get('/elections/:id', getElection);
router.delete('/elections/:id', removeElection);
router.patch('/elections/:id', updateElection);
router.get('/elections/:id/candidates', getCandidateoftElection);
router.get('/elections/:id/voters', getElectionVoters);



router.post ('/candidates', addCandidate);
router.get('/candidates', getCandidate);
router.delete('/candidates/:id', removeCandidate);
router.patch('/candidates/:id', voteCandidate);

module.exports = router;
