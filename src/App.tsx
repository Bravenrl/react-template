import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div />
      <h1>Vite + React</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          count is
          {count}
        </button>
        <p>
          Edit
          <code>src/App.tsx</code>
          and save to test HMR
        </p>
        <button type="button">
          new button
        </button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      <div className={`${count}`}> </div>
    </div>
  );
}

export default App;
