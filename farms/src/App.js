import React from 'react';
import { Segment } from 'semantic-ui-react'
import NavBar from './components/NavBar'
import FarmsCollection from './components/FarmsCollection';


function App() {
  return (

      <Segment>
        <NavBar/>
        <FarmsCollection/>
      </Segment>

  );
}

export default App;