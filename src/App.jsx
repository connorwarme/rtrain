import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Testimony from "./Testimony";
import Tiles from "./Tiles";
import Greeting from "./Greeting";
import List from "./List";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('red')

  const handleCount = () => {
    setCount(count + 1);
  };

  const clearCount = () => {
    setCount(0);
  };

  const changeBg = () => {
    if (bgColor === 'red') {
      setBgColor('blue')
    } else if (bgColor === 'blue') {
      setBgColor('purple')
    } else if (bgColor === 'purple') {
      setBgColor('white')
    } else {
      setBgColor('red')
    }
    handleCount()
  }

  return (
    <>
      <Header />
      <Greeting />
      <div style={{backgroundColor: bgColor, height: '100px', width: '100px'}}></div>
      <p>Count is: {count}</p>
      <button onClick={handleCount}>Add to Count</button>
      <button onClick={clearCount}>Clear Count</button>
      <button onClick={changeBg}>Change Color</button>
      <div>
        <Testimony />
      </div>
      <div>
        <Tiles />
      </div>
      <List />
    </>
  );
}

export default App;
