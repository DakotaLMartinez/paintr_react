import { useState } from 'react';

function Painting(props) {

  // Initialize "votes" state
  const [votes, votesSetter] = useState(props.painting.votes);

  // Breakout Activity #2: Create Function to Add Votes (addVotes)
  function addVotes() {
    votesSetter(votes => votes + 1);
  }

  return (
    <div>
      <img
        src={props.painting.image}
        alt={props.painting.title}
      />
        <h4>
          "{props.painting.title}" by {props.painting.artist.name}
        </h4>a
        <p>Year: {props.painting.date}</p>
        <p>
          Dimensions: {props.painting.width} in. x {props.painting.height} in.
        </p>

        <div className="ui labeled button" tabIndex="0">

        {/* Breakout Activity #2: Call addVotes() via onClick */}
        <div onClick={addVotes} className="ui red button">
          <i className="heart icon"></i> Add Vote
        </div>
        <button className="ui basic red left pointing label">
          {votes}
        </button>
      </div>
    </div>
  );
};

export default Painting;
