import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UiActions } from '../store/ui-slice';
import { elections as dummyElections } from '../data';
import Election from '../components/Election';
import AddElectionModal from '../components/AddElectionModal';
import UpdateElectionModal from '../components/updateElectionModal';

//import { useNavigate } from 'react-router-dom';

const Elections = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();

  const electionModalShowing = useSelector((state) => state.ui.electionModalShowing);
  const updateElectionModalShowing = useSelector((state) => state.ui.updateModalShowing);

  // 🚨 Protéger l'accès à la page
  //useEffect(() => {
    //const token = localStorage.getItem('userToken');
    //if (!token) {
      //navigate('/login');
   // }
  //}, [navigate]);

  const handleCreateElection = () => {
    dispatch(UiActions.openElectionModal());
  };

  return (
    <>
      <section className='elections'>
        <div className='container elections__container'>
          
          <header className='elections__header'>
            <h1>Élections en cours</h1>
            <button className='btn primary' onClick={handleCreateElection}>
              Créer une nouvelle élection
            </button>
          </header>
          <menu className='elections__menu'>
            {dummyElections.map((election) => (
              <Election key={election.id} {...election} />
            ))}
          </menu>
        </div>
      </section>

      {electionModalShowing && <AddElectionModal />}
      {updateElectionModalShowing && <UpdateElectionModal />}
    </>
  );
};

export default Elections;
