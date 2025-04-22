import React from 'react';
import PropTypes from 'prop-types'; 
import { IoMdTrash } from 'react-icons/io';

const ElectionCandidate = ({ fullName, image, motto, id, onDelete }) => {
  return (
    <li className="electionCandidate">
      <div className="electionCandidate_image">
        <img src={image} alt={fullName} loading="lazy" />
      </div>
      <div className="electionCandidate_info">
        <h5>{fullName}</h5>
        <small>{motto?.length > 70 ? motto.substring(0, 70) + '...' : motto}</small>
        <button 
          className="electionCandidate__btn" 
          onClick={() => onDelete(id)}
          title="Supprimer le candidat"
        >
          <IoMdTrash />
        </button>
      </div>
    </li>
  );
};

ElectionCandidate.propTypes = {
  fullName: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  motto: PropTypes.string,
  id: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ElectionCandidate;
