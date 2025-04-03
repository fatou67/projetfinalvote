import React from 'react';
import { Link } from 'react-router-dom';
import { candidates } from '../data';
import CandidateRating from './CandidateRating';

const defaultThumbnail = '/assets/default/image.jpg';

function ResultElection({ id, thumbnail, title }) {
  const [totalVotes] = React.useState(521);
  const electionCandidates = candidates.filter(candidate => candidate.elections.includes(id));

  return (
    <article className='result'>
      <header className="result_header">
        <h4>{title}</h4>
        <div className="result_header-image">
          <img 
            src={thumbnail || defaultThumbnail} 
            alt={title || 'Election Thumbnail'} 
            onError={(e) => {
              e.target.src = defaultThumbnail;
            }}
          />
        </div>
      </header>
      <ul className="result_list">
        {electionCandidates.map(candidate => (
          <CandidateRating
            key={candidate.id}
            {...candidate}
            totalVotes={totalVotes}
          />
        ))}
      </ul>
      <Link to={`/election/${id}/candidates`} className='btn primary full'>
        Enter Election
      </Link>
    </article>
  );
}

export default ResultElection;