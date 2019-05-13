import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Main from './components/main/Main';

function App() {
  return (
    <div className="App container-fluid">
        <Header/>
        <Main />
      </div>
  );
}

export default App;
