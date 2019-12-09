import React from 'react';
import TravelCards from './components/TravelCards'
import FormUsers from './components/FormUsers'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormUsers />
        <TravelCards />
      </header>
    </div>
  );
}

export default App;
