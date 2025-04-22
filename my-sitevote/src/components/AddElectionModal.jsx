import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice'; // Import correct

const AddElectionModal = () => {
    const [electionName, setElectionName] = React.useState('');
    const [electionDate, setElectionDate] = React.useState('');
   
    const dispatch = useDispatch();
    
    const closeModal = () => {
        dispatch(UiActions.closeAddElectionModal()); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add election
        closeModal();
    };

    return (
        <section className="modal">
            <div className="modal__content">
                <header className='modal__header'>
                    <h4>Add Election</h4> 
                    <button className="close__modal" onClick={closeModal}>
                        <IoMdClose/>
                    </button>
                </header>
                
                <form onSubmit={handleSubmit}>
                    <div>
                        <h6>Election Name</h6>
                        <input 
                            type="text" 
                            value={electionName}
                            onChange={(e) => setElectionName(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <h6>Election Date</h6>
                        <input 
                            type="date" 
                            value={electionDate}
                            onChange={(e) => setElectionDate(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Election
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddElectionModal;
