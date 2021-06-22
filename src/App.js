// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './painting_data';

// import useState Hook
import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

// Component Imports
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm';

import { Container, Button } from "@material-ui/core"

function App() {

  const [paintings, paintingsSetter] = useState(paintingsData);
  const [sorted, sortedSetter] = useState(false);


  // Create callback function to change Parent's "paintings" state to be sorted by votes
  function sortPaintings() {
    
    // Use the spread (...) operator to clone the state / prompt React to ackowledge the state change
    let originalList = [...paintingsData];
    
    const sortedList = originalList.sort((currentPainting, nextPainting) => {
      let votesCurrentPainting = currentPainting.votes;
      let votesNextPainting = nextPainting.votes;

      // Compare the two vote amounts
      if (votesCurrentPainting < votesNextPainting) return 1;
      if (votesCurrentPainting > votesNextPainting) return -1;
      return 0;
    });
    paintingsSetter(sortedList);
  }

  function removeSort() {
    paintingsSetter(paintingsData)
  }

  function toggleSort() {
    if (sorted) {
      removeSort();
    } else {
      sortPaintings();
    }
    sortedSetter(!sorted);
  }

  return (
    <div>
      <NavBar
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />

      <Switch>
        <Route exact path="/">
          <Container>
            <Button variant="contained" onClick={toggleSort}>{sorted ? 'Unsort Paintings' : 'Sort Paintings'}</Button>
          </Container>
          <PaintingsList paintings={paintings} />
        </Route>
        <Route exact path="/paintings/new">
          <PaintingForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
