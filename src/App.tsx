import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Sudoku from './components/Sudoku';

function App() {
  return (
    <div>
      <Header />
      <div className='App'>
        <Sudoku />
      </div>
      <Footer />
    </div>
  );
}

export default App;
