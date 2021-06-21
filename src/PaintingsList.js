// Component Imports
import Painting from './Painting';

// Hooks Imports
import { useState } from 'react';

// Material-UI Imports
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { Container } from '@material-ui/core';

function PaintingsList(props) {
  
  const [searchTerm, setSearchTerm] = useState("");

  function searchResults() {
    return props.paintings.filter(painting => {
      const title = painting.title.toLowerCase();
      return title.includes(searchTerm.toLowerCase())
    })
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value);
  }

  return(
    <div>
    {/* Shorthand JSX Parent Container Syntax */}
    {/* <> */}

      <Container align="center">
        <h1>Paintings</h1>
        <hr />
        <TextField 
          id="filled-basic" 
          label="Filled" 
          variant="filled" 
          onChange={handleSearch}
        />

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
