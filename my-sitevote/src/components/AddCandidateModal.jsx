import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { UiActions } from '../store/ui-slice';

const AddCandidateModal = ({ onAddCandidate }) => {
    const [fullName, setFullName] = useState('');
    const [motto, setMotto] = useState('');
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState('');

    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(UiActions.closeAddCandidateModal());
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setPreview(URL.createObjectURL(file)); 
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCandidate({ fullName, motto, image: preview });
        setFullName('');
        setMotto('');
        setImage(null);
        setPreview('');
        closeModal();
    };

    return (
        <div className="modal">
            <div className="modal__content">
                <header className='modal__header'>
                    <h4>Ajouter un candidat</h4>
                    <button className="close__modal" onClick={closeModal}>
                        <IoMdClose/>
                    </button>
                </header>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nom du candidat" value={fullName} onChange={e => setFullName(e.target.value)} required />
                    <input type="text" placeholder="Slogan" value={motto} onChange={e => setMotto(e.target.value)} required />
                    <input type="file" accept="image/*" onChange={handleImageChange} required />
                    {preview && <img src={preview} alt="Aperçu" className="preview" />}
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    );
};

export default AddCandidateModal;
