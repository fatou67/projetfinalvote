import React from 'react';
import { useDispatch } from 'react-redux';
import { IoMdClose } from 'react-icons/io';
import { UiActions } from '../store/ui-slice'; // Importez les actions depuis votre slice

const AddElectionModal = () => {
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [thumbnail, setThumbnail] = React.useState('');
    
    const dispatch = useDispatch();

    // Fermeture du modal
    const closeModal = () => {
        dispatch(UiActions.closeElectionModal()); // Utilisez UiActions
    };

    return (
        <section className='modal'>
            <div className='modal_content'>
                <header className='modal_header'>
                    <h4>Créez une nouvelle élection</h4>
                    <button className='modal_close' onClick={closeModal}>
                        <IoMdClose/>
                    </button>
                </header>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('New election:', { title, description, thumbnail });
                }}>
                    <div>
                        <h6>Titre de l'élection</h6>
                        <input 
                            type="text" 
                            value={title} 
                            onChange={(e) => setTitle(e.target.value)} 
                            name='title' 
                        />
                    </div>
                    <div>
                        <h6>Description de l'élection</h6>
                        <input 
                            type="text" 
                            value={description} 
                            onChange={(e) => setDescription(e.target.value)} 
                            name='description' 
                        />
                    </div>
                    <div>
                        <h6>Image de l'élection</h6>
                        <input 
                            type="file" 
                            name='thumbnail'  
                            onChange={e => setThumbnail(e.target.files[0])} 
                            accept="image/png, image/jpeg, image/webp, image/avif"
                        />
                    </div>
                    <button type='submit' className='btn primary'>
                        Ajouter l'élection
                    </button>
                </form>
            </div>
        </section>
    );
};

export default AddElectionModal;