// Component Imports
import Painting from './Painting';

// Hooks Imports
import { useState, useEffect } from 'react';

// Material-UI Imports
import { Container, Button, Box, Grid, TextField } from '@material-ui/core';


function PaintingsList() {

  const [paintingsData, paintingsDataSetter] = useState([])
  const [paintings, paintingsSetter] = useState(paintingsData);
  const [sorted, sortedSetter] = useState(false);

  useEffect(() => {
    fetch("http://localhost:9393/paintings")
      .then(response => response.json())
      .then(paintings => {
        console.log(paintings)
        paintingsDataSetter(paintings);
        paintingsSetter(paintings);
      })
  }, [])

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
  
  const [searchTerm, setSearchTerm] = useState("");

  function searchResults() {
    return paintings.filter(painting => {
      const title = painting.title.toLowerCase();
      return title.includes(searchTerm.toLowerCase())
    })
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return(
    <div>

      <Container align="center">
        <h1>Paintings</h1>
        <hr />
        {/* <Box width={1/3}> */}
        <Box display="flex" style={{ justifyContent: "space-between" }}>
          <TextField 
            id="filled-basic" 
            label="Search" 
            variant="filled" 
            onChange={handleSearch}
            />
        
            <Button variant="contained" onClick={toggleSort}>{sorted ? 'Unsort Paintings' : 'Sort Paintings'}</Button>  
        </Box>
        {/* </Box> */}
        

        {/* Implement Material-UI */}
        <Box m={5}>
          <Grid
            container
            spacing={10}
            direction="row"
          >
            {
              searchResults().map(painting => (
                <Grid
                  item
                  xs={3}
                  key={painting.id}
                >
                  <Painting
                    painting={painting}
                  />
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Container>
    
    {/* </> */}
    </div>
  );
}

export default PaintingsList;
