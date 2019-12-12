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

      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/userconnexion" component={UserConnexion}/>
        <Route path="/formusers"component={FormUsers}/>
        <Route exact path="/travelcards" component={TravelCards}/>
        <Route exact path="/travelform" component={TravelForm}/>
      </Switch>

    </div>
  );
}

export default App;
