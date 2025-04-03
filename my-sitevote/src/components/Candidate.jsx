// Candidate.jsx
import React from 'react';
import { UiActions } from '../store/ui-slice';
import { useDispatch } from 'react-redux';
import { voterActions } from '../store/vote-slice';

const Candidate = ({ image, id, fullName = '', motto = '' }) => {
  const dispatch = useDispatch();

  console.log("Candidate:", { image, id, fullName, motto }); // Débogage

  // Ouvrir la fenêtre de confirmation du vote
  const openCandidateModal = () => {
    dispatch(UiActions.openVoteCandidateModal());
    dispatch(voterActions.changeSelectedVoteCandidate(id));
  };

  return (
    <article className='candidate'>
      <div className='candidate_image'>
        <img src={image} alt={fullName || 'Candidate Image'} />
      </div>
      <h5>
        {fullName.length > 20 ? fullName.substring(0, 20) + '...' : fullName}
      </h5>
      <small>
        {motto.length > 25 ? motto.substring(0, 25) + '...' : motto}
      </small>
      <button className='btn primary' onClick={openCandidateModal}>
        Vote
      </button>
    </article>
  );
};

export default Candidate;