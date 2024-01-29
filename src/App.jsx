import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>Hello World</h1>
      <p>Count is: `${count}`</p>
      <button onClick={handleCount}>Add to Count</button>
    </>
  );
}

export default App;
