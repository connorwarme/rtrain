import { useState } from "react";
import Image from "./image";

const Slider = ({ testArr, selected, setSelected }) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(5)
  const [displayArr, setDisplayArr] = useState(testArr.length > 4 ? testArr.slice(0, 5) : [...testArr])
  // const displayArr = testArr.length > 4 ? [testArr[0], testArr[1], testArr[2], testArr[3], testArr[4]] : [...testArr];
  // what is best practice here? to useState for the display array?
  // const displayArr = testArr.length > 4 ? testArr.slice(index[0], index[1]) : [...testArr];

  const handleForward = () => {
    setStart(start + 1)
    setEnd(end + 1)
    setDisplayArr(testArr.slice(start+1, end+1))
    console.log([start, end])
    console.log(displayArr)
  }
  const handleBack = () => {
    setStart(start - 1)
    setEnd(end - 1)
    setDisplayArr(testArr.slice(start-1, end-1))
  }

  return ( 
    <>
      <div className="slider-container">
        { testArr.length > 4 && start > 0 && <button onClick={handleBack}>Back</button> }
        { displayArr.map(test => {
          return <Image key={test.key} unit={test} selected={selected} setSelected={setSelected} />
        })}
        { testArr.length > 4 && end < testArr.length && <button onClick={handleForward}>Forward</button> }
      </div>
    </>
   );
}
 
export default Slider;