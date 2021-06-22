// import useState hook to initialize our states and make them re-settable
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { TextField, Container, Box, Button } from '@material-ui/core';

function PaintingForm() {
    // create a state to keep track of ImgURL
    // const [stateName, setterMethod] = useState(initialStateValue);
  const history = useHistory();

  const [imgUrl, imgUrlSetter] = useState("");
  const [title, titleSetter] = useState("");
  const [artistName, artistNameSetter] = useState("");
  const [date, dateSetter] = useState("");
  const [width, widthSetter] = useState("");
  const [height, heightSetter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // make fetch request here
    history.push('/')
  }

  return(
    <Container>
      <Box
        mx="auto"
        // width={1 / 2}
        align="center"
      >
        <h1> Add a new Painting</h1>
        
        <form onSubmit={handleSubmit}>
          {/* Controlled Input */}
            <TextField 
              type="text"
              placeholder="ImgURL"
              variant="filled"
              onChange={(e) => imgUrlSetter(e.target.value)}
              value={imgUrl}
              style={{
                margin: "0.5em 0",
                display: "block"
              }}
            />
          

            <TextField 
              type="text"
              placeholder="title"
              variant="filled"
              onChange={e => titleSetter(e.target.value)}
              value={title}
              style={{
                margin: "0.5em 0",
                display: "block"
              }}
            />
          

            <TextField 
              type="text"
              placeholder="Artist Name"
              variant="filled"
              onChange={e => artistNameSetter(e.target.value)}
              value={artistName}
              style={{
                margin: "0.5em 0",
                display: "block"
              }}
            />
          

            <TextField 
              type="text"
              placeholder="date"
              variant="filled"
              onChange={e => dateSetter(e.target.value)}
              value={date}
              style={{
                margin: "0.5em 0",
                display: "block"
              }}
            />
          

            <TextField 
              type="number"
              placeholder="width"
              variant="filled"
              onChange={e => widthSetter(e.target.value)}
              value={width}
              style={{
                margin: "0.5em 0",
                display: "block"
              }}
            />
          

            <TextField 
              type="number"
              placeholder="height"
              variant="filled"
              onChange={e => heightSetter(e.target.value)}
              value={height}
              style={{
                margin: "0.5em 0 1em",
                display: "block"
              }}
            />

          <Button variant="contained" color="primary" type="submit">Add New Painting</Button>
        </form>
      </Box>
    </Container>
  )
}

export default PaintingForm
