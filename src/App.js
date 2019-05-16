import React from 'react';
import './index.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Navigation from './components/header/Navigation';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App container-fluid">
        <Navigation/>
        <Header/>
        <Main />
        <Footer />
    </div>
  );
}

export default App;
