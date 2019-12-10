import React from 'react';
import TravelCards from './components/TravelCards'
import FormUsers from './components/FormUsers'
import TravelForm from './components/TravelForm'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormUsers />
        <TravelCards />
        < TravelForm />
      </header>
    </div>
  );
}

export default App;
