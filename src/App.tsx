import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = ()=>{
    setCount(count + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='count-display'>{count}パワー!!</h1>
        <button className='increment-button' onClick={handleClick}>+</button>
      </header>
    </div>
  );
}

export default App;