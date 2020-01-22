import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import requireAuth from './hoc/requireAuth'
import requireNotAuth from './hoc/requireNotAuth'
import HomeIntroFirst from './components/HomeIntroFirst';
import HomeIntroSec from './components/HomeIntroSec';
import Home from './components/Home';
import FormUsers from './components/FormUsers'
import UserProfile from './components/UserProfile'
import UserConnexion from './components/UserConnexion';
import TravelForm from './components/TravelForm'
import TravelCards from './components/TravelCards'
import TravelDetails from './components/TravelDetails'
import Cgu from './components/Cgu'
import './App.css'


function App() {
  return (
    <div className="App">
      <Switch>
       {/* <Redirect  exact  from='/userconnexion'  to='/travelcards'  />*/}
        <Route exact path="/" component={HomeIntroFirst}/>
        <Route exact path="/introsecond" component={HomeIntroSec}/>
        <Route exact path="/home" component={Home}/>
        <Route path="/formusers"component={FormUsers}/>
        <Route path="/profile"component={UserProfile}/>
        <Route path="/cgu"component={Cgu}/>
        <Route path="/userconnexion" component={UserConnexion} component={requireNotAuth(UserConnexion)}/>
        <Route exact path="/travelcards" component={TravelCards} component={requireAuth(TravelCards)}/>
        <Route exact path="/travelform" component={TravelForm}/>
        <Route exact path="/traveldetails" render={(props) => <TravelDetails {...props}/>} />
      </Switch> 
    </div>
  );
}

export default App;
