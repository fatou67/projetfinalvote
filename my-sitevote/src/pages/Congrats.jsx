import React from 'react'
import { Link } from 'react-router-dom'

function Congrats() {
  return (
    <section className='congrats'>

      <div className='container congrats__container'>
        <h2>Merci pour votre vote </h2>
        <p> Votre vote a été ajouté au nombre de votes de votre candidat. 
          Vous serez redirigé sous peu pour voir le nouveau résultat. </p>
          <Link to='/results'className='btn sm primary'>Regarder les results</Link>
      </div>

    </section>
  )
}

export default Congrats