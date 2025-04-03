import React, { useState } from 'react'

import { elections as dummyElections } from '../data';
import Election from '../components/Election';


const Elections = () => {
  const [elections, setElections] = useState(dummyElections);

  const handleCreateElection = () => {
    const newElection = { id: elections.length + 1, title: 'New Election', description: 'Description of new election', thumbnail: 'path/to/image' };
    setElections([...elections, newElection]);
  }



  
  return (
    <section className='elections'>
      <div className='container elections__container' >
        <header className='elections__header'>
          <h1> Élection en cours</h1>

          <button className='btn primary' onClick={handleCreateElection}> Créer une nouvelle élection </button>


        </header>
        <menu className='elections__menu'>
          {
            elections.map(election => <Election key = {election.id} {...election} />)   
          }
        </menu>

      </div>

    </section>
  )
}

export default Elections
