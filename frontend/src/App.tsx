import React from 'react';
import Navbar from './layout/Navbar';
import QuotesGenerator from './modules/quotes-generator';

function App() {
  return (
    <div className="App">
      <Navbar brand="Qualifio" />
      <QuotesGenerator />
    </div>
  );
}

export default App;
