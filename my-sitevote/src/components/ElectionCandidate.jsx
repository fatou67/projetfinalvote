import React from 'react';
import { IoMdTrash } from 'react-icons/io'; // Import correct

const ElectionCandidate = ({ fullName, image, motto, id, onDelete }) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(id);
    }
  };

  return (
    <li className='electionCandidate'>
      <div className='electionCandidate_image'>
        <img src={image} alt={fullName} />
      </div>
      <div className='electionCandidate_info'>
        <h5>{fullName}</h5>
        <small>{motto?.length > 70 ? motto.substring(0, 70) + '...' : motto}</small>
        <button 
          className='electionCandidate__btn'
          onClick={handleDelete}
        >
          <IoMdTrash /> {/* Utilisation correcte */}
        </button>
      </div>
    </li>
  );
};

export default ElectionCandidate;