import React from 'react';
import TravelCards from './components/TravelCards'
import UserConnexion from './components/UserConnexion';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TravelCards />
        <UserConnexion />
      </header>
    </div>
  );
}

export default App;
