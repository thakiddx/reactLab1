import React, { useState } from 'react';
import './App.css';
import Header from "./components/Header/header.jsx";
import Button from './components/Button/button.jsx';

function App() {
const [headerColor, setHeaderColor] = useState('lightblue');

const changeColorToBlue = () => {
  setHeaderColor('blue');
};

  return (
    <div className="App">
      <Header backgroundColor={headerColor} />
      <Button onClick={changeColorToBlue} />
    </div>
  );
}


export default App;