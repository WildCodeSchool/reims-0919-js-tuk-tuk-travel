import React from 'react';
import TravelCards from './components/TravelCards'
import UserConnexion from './components/UserConnexion';
import './App.css'
import FormUsers from './components/FormUsers'
import TravelForm from './components/TravelForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserConnexion />
        <FormUsers />
        <TravelCards />
        < TravelForm />
      </header>
    </div>
  );
}

export default App;
