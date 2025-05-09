import React from 'react';
import { elections as dummyElections } from '../data';
import ResultElection from '../components/ResultElection'; // Added import for ResultElection

const Results = () => {
  const [elections, setElections] = React.useState(dummyElections);
  return (
    <section className="results"> 
      <div className="container results_container"> 
        {
          elections.map(election => <ResultElection key={election.id} {...election} />) 
        }
      </div>
    </section>
  )
}
export default Results;
