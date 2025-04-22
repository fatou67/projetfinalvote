
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ElectionCandidate from '../components/ElectionCandidate';
import AddCandidateModal from '../components/AddCandidateModal';
import { elections, candidates, voters } from "../data";
import { IoAddOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { UiActions } from "../store/ui-slice";

const ElectionDetails = () => {
    const { id } = useParams();
    const currentElection = elections.find(e => e.id === id);
    const [electionCandidates, setElectionCandidates] = useState(candidates.filter(c => c.electionId === id));

    const dispatch = useDispatch();
    const modalShowing = useSelector(state => state.ui.addCandidateModalShowing);

    const addCandidate = (newCandidate) => {
        setElectionCandidates([...electionCandidates, { ...newCandidate, id: Date.now() }]);
    };

    return (
        <section className="electionDetails">
            <div className="container electionDetails__container">
                <h2>{currentElection.title}</h2>
                <p>{currentElection.description}</p>
                <img src={currentElection.thumbnail} alt={currentElection.title} className="electionDetails__image" />
                <menu className="electionDetails__candidates">
                    {electionCandidates.map(candidate => (
                        <ElectionCandidate key={candidate.id} {...candidate} />
                    ))}
                </menu>
                <button className="add__candidate-btn" onClick={() => dispatch(UiActions.openAddCandidateModal())}>
                    <IoAddOutline/> Ajouter un candidat
                </button>
                {modalShowing && <AddCandidateModal onAddCandidate={addCandidate} />}
            </div>
        </section>
    );
};

export default ElectionDetails;
