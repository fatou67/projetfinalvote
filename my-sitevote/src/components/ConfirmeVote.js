import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { candidates } from '../data';
import { UiActions } from '../store/ui-slice';

const ConfirmeVote = () => {
    const [modalCandidate, setModalCandidate] = useState({});
    const dispatch = useDispatch();
    const selectedVoteCandidate = useSelector(state => state.vote?.selectedVoteCandidate);

    // Fonction pour récupérer le candidat sélectionné
    const fetchCandidate = () => {
        if (!selectedVoteCandidate) return; 

        const foundCandidate = candidates.find(candidate => candidate.id === selectedVoteCandidate);
        setModalCandidate(foundCandidate || {}); 
    };

    useEffect(() => {
        fetchCandidate();
    }, [selectedVoteCandidate]); 

    const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal());
    };

    return (
        <section className="modal">
            <div className="modal__content confirm__vote-content">
                <h5>Confirmer votre vote svp</h5>

                {modalCandidate?.image ? (
                    <div className='confirm__vote-image'>
                        <img src={modalCandidate.image} alt={modalCandidate?.fullName || "Candidat inconnu"} />
                    </div>
                ) : (
                    <p>Image non disponible</p>
                )}

                <h2>
                    {modalCandidate?.fullName?.length > 17
                        ? modalCandidate?.fullName?.substring(0, 17) + "..."
                        : modalCandidate?.fullName}
                </h2>
                <p>
                    {modalCandidate?.motto?.length > 45
                        ? modalCandidate?.motto?.substring(0, 45) + "..."
                        : modalCandidate?.motto}
                </p>

                <div className='confirm__vote-cta'>
                    <button className='btn' onClick={closeCandidateModal}>Annuler</button>
                    <button className='btn'>Confirmer</button>
                </div>
            </div>
        </section>
    );
};

export default ConfirmeVote;
