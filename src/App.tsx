import {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React</h1>
        <div>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
