import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';


const App: React.FC = () => {

  const [counter, setCounter] = useState(1);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px'}}>
      <button onClick={() => setCounter(counter+1)}>Increase Counter</button>
      <button onClick={() => setCounter(counter-1)}>Decrease Counter</button>
      <Counter counter={counter}/>
    </div>
  );
}

export default App;
