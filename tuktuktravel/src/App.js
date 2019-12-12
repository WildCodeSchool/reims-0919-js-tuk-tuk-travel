import React from 'react';
import TravelCards from './components/TravelCards'
import UserConnexion from './components/UserConnexion';
import './App.css'
import FormUsers from './components/FormUsers'
import TravelForm from './components/TravelForm'
import Home from './components/Home';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />        
      </header>
    
      <Switch>
        <Route exact path="/userconnexion" component={UserConnexion}/>
        <Route path="/formusers"component={FormUsers}/>
        <Route path="/travelcards" component={TravelCards}/>
        <Route path="/travelform" component={TravelForm}/>
      </Switch>
    </div>
  );
}

export default App;
