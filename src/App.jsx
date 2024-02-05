import { useState } from "react";
import "./App.css";
import Header from "./header";
import Testimony from "./testimony";
import Tiles from "./tiles";
import Greeting from "./Greeting";

function App() {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };

  const clearCount = () => {
    setCount(0);
  };

  return (
    <>
      <Header />
      <Greeting />
      <p>Count is: {count}</p>
      <button onClick={handleCount}>Add to Count</button>
      <button onClick={clearCount}>Clear Count</button>
      <div>
        <Testimony />
      </div>
      <div>
        <Tiles />
      </div>
    </>
  );
}

export default App;
