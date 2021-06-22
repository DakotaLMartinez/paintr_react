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

  

  return (
    <div>
      <NavBar
        title="Paintr"
        icon="paint brush"
        description="an app we made"
      />

      <Switch>
        <Route exact path="/">
          <PaintingsList />
        </Route>
        <Route exact path="/paintings/new">
          <PaintingForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
