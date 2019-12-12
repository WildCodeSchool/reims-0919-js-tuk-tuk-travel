import React from 'react';
import TravelCards from './components/TravelCards'
import FormUsers from './components/FormUsers'
import TravelForm from './components/TravelForm'
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />        
        <FormUsers />
        <TravelCards />
        <TravelForm />
      </header>
    </div>
  );
}

export default App;
