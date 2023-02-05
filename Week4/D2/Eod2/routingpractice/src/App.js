import './App.css';
import React from 'react';
import {Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home';
import WordsandNumbers from './components/WordsandNumbers';


function App() {
  return (
    <div className="App">
      <h1>Routing Practice</h1>
      <Link to={'/home'}>Go To Home</Link>
      <br/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/word/:word/:text_color/:bground_color" element={<WordsandNumbers />}/>
        <Route path="/number/:number" element={<WordsandNumbers />}/>

      </Routes>
    </div>
  );
}

export default App;
