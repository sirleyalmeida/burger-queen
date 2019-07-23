import React from 'react';
import './App.css';
import SignInAndCreateUser from './components/SignInAndCreateUser';
import Saloon from './components/Saloon';
import Kitchen from './components/Kitchen';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={SignInAndCreateUser} />
        <Route path="/saloon/:id" component={Saloon} />
        <Redirect path="/saloon" component={SignInAndCreateUser} />
        <Route path="/kitchen/:id" component={Kitchen} />
        <Redirect path="/kitchen" component={SignInAndCreateUser} />
      </div>
    </Router>
  );
}

export default App;
