

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UiActions } from '../store/ui-slice';



const  Election = ({ id, title, description, thumbnail }) => {

  const dispatch = useDispatch();

  //open update election modal

  const openModal = () => {
    dispatch(UiActions.openUpdateElectionModal(id));

  }

  return (
   
    <article className="election" >
       <div className='election__image'>
            <img src={thumbnail}  alt={title} />
</div>

    <div className='election__info'>
         
         <Link to={`/election/${id}`}><h4>{title}</h4></Link>

         <p>{description?.length > 255 ? description.substring(0,255) + "..."  :

            description}</p>
          <div className='election__cta'>
  <Link to={`/election/${id}`} className="btn secondary sm">View</Link>

</div>
     </div>

    </article>
  )
}

export default Election
