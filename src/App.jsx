import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const clearCount = () => {
    setCount(0)
  }

  return (
    <>
      <h1>Hello World</h1>
      <p>Count is: {count}</p>
      <button onClick={handleCount}>Add to Count</button>
      <button onClick={clearCount}>Clear Count</button>
    </>
  );
}

export default App;
