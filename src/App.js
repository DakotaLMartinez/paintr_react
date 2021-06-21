// https://semantic-ui.com/
import 'semantic-ui-css/semantic.min.css';

// import all data from "painting_data.js"
import paintingsData from './painting_data';

// import useState Hook
import React, { useState } from 'react';

// Compontent Imports
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import PaintingForm from './PaintingForm';

function App() {

  // console.log(paintingsData);

  // Initialize "color", "paintings", and "formView" states
  const [color, colorSetter] = useState("red");
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [sorted, sortedSetter] = useState(false);
  const [formView, formViewSetter] = useState(false);

  // Create callback function to change Parent's "color" state (changeColor)
  function changeColor(newColor) {
    
    // here, we want to call our paintingSetter function
    // to change the value of our "color" state
    colorSetter(newColor);
  }

  // Breakout Activity #1: Create Function to Toggle Between PaintingForm / PaintingsList (toggleForm)
  // ...
  function toggleForm() {
    formViewSetter(!formView);
  }

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
        color={color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"

        // Pass changeColor() as prop to NavBar
        changeColor={changeColor}
      />

      {/* Add toggleForm click behavior */}
      <button onClick={toggleForm}>{formView ? 'Hide' : 'Show'} New Painting Form</button>
      <button onClick={toggleSort}>{sorted ? 'Unsort Paintings' : 'Sort Paintings'}</button>
      <hr />

      {/* Breakout Activity #1: Render PaintingForm or PaintingsList Components based upon the new formView state value */}
      
      {/* Pass sortPaintings to PaintingsList whenever it's rendered */}
      { formView ? <PaintingForm /> : <PaintingsList paintingsData={paintings} paintings={paintings} /> }
    </div>
  );
}

export default App;
