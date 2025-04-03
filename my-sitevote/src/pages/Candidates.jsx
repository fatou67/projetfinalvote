import React from 'react';
import { candidates as dummyCandidates } from '../data';
import { useParams } from 'react-router-dom';
import Candidate from '../components/Candidate'; // Import corrigé
import ConfirmeVote from '../components/ConfirmeVote';
import { useSelector } from 'react-redux';

const Candidates = () => {
  const { id } = useParams();


  const voteCandidateModalShowing = useSelector(state => state.ui.voteCandidateModalShowing)

  // Filtrer les candidats appartenant à cette élection
  const candidates = dummyCandidates.filter(candidate => candidate.elections.includes(id));

  return (
    <> 
    <section className='candidates'>
      <header className='candidates_header'>
        <h1>Votez pour votre Candidate</h1>
        <p> Ce sont les candidats pour l’élection sélectionnée. Veuillez voter une seule fois et judicieusement, car il ne vous sera pas permis de voter à nouveau..</p>
      </header>
      <div className='container candidates_container'>
          {
          candidates.length > 0 ? (
            candidates.map(candidate => <Candidate key={candidate.id} {...candidate} />)) : (
            <p> </p>
          )
           }
      </div>
    </section>
    {voteCandidateModalShowing &&<ConfirmeVote/>}
    </>
  );
};

export default Candidates;
