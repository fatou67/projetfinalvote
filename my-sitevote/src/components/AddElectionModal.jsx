import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice';
import axios from 'axios';


const AddElectionModal = () => {
    const [electionName, setElectionName] = React.useState('');
    const [electionDate, setElectionDate] = React.useState('');
    const [error, setError] = React.useState(null);

    const dispatch = useDispatch();
    
    const closeModal = () => {
        dispatch(UiActions.closeAddElectionModal()); 
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                title: electionName,
                description: `Election scheduled on ${electionDate}`,
                thumbnail: new Date().toISOString() // ou un champ réel si tu gères les images
            };

            await axios.post('http://localhost:5000/api/elections', payload);

            // Tu peux aussi déclencher une action Redux ici pour rafraîchir la liste
            closeModal();
        } catch (err) {
            console.error('Failed to add election:', err);
            setError('Failed to add election');
        }
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
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <button type="submit" className="btn btn-primary">
                        Add Election
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddElectionModal;
