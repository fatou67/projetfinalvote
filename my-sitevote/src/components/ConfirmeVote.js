import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { candidates } from '../data'
import { UiActions } from '../store/ui-slice'

const  ConfirmeVote = () => {
    const [modalCandidate, setModalCandidate] = React.useState({})


    const dispatch = useDispatch()


    //Fermer la fenêtre de confirmation

     const closeCandidateModal = () => {
        dispatch(UiActions.closeVoteCandidateModal())

    }


    //get selected candidate from redux store

    const selectedVoteCandidate = useSelector (state => state.vote.selectedVoteCandidate)


    //Obtenir le candidat sélectionné

    const fetchCandidate = () => {
        candidates.find(candidate => {
            if (candidate.id == selectedVoteCandidate) {
                setModalCandidate(candidate)
                return true;

            }
        })

    }

    useEffect(() => {
        fetchCandidate()

    }, [])

    
  return (
    <section className="modal">
        <div className="modal__content confirm__vote-content">
            <h5>Confimer votre vote svp</h5>
            <div className='confirm__vote-image'>
            <img src={modalCandidate.image} alt={modalCandidate.fullName}></img>
            </div>
            <h2>{modalCandidate?.fullName?.lenth > 17 ? modalCandidate?.fullName?.substring(0, 17) + "..." :
           modalCandidate?.fullName }</h2>
            <p>{modalCandidate?.motto?.lenth > 45 ? modalCandidate?.motto?.substring(0, 45) + "..." :
           modalCandidate?.motto}</p>
            <div className='confirm__vote-cta'>
                <button className='btn' onClick={closeCandidateModal}>Cancel</button>
                <button className='btn'>Confirm</button>
            </div>
            
        </div>

    </section>
  )
}

export default ConfirmeVote
