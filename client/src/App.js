import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from "@reach/router";
import Main from './views/Main';
import New from './views/New';
import Show from './views/Show';
import Edit from './views/Edit'

function App() {
  return (
    <div className="App">
      <div className="bg-dark text-warning rounded col-12 mx-auto">
        <h1>Pet Shelter</h1>
        <h4>These Pets are looking for a good home</h4>
        <div>
          <Link to="/new" className="btn btn-primary mr-2">Add a Pet To the Shelter</Link>
          <Link to="/" className="btn btn-primary">Home</Link>
        </div>
        <Router>
          <Main path="/" />
          <New path="/new" />
          <Show path="/pet/:id" />
          <Edit path="/edit/:id" />
        </Router>
      </div>
    </div>  
  );
}

export default App;
