import { useState } from "react";
import Image from "./Image";

const Slider = ({ testArr, selected, setSelected }) => {
  const [start, setStart] = useState(0);
  // could eliminate "end" by slicing (start + 1, start + 6)
  const [end, setEnd] = useState(5);
  const [displayArr, setDisplayArr] = useState(
    testArr.length > 4 ? testArr.slice(0, 5) : [...testArr],
  );
  // const displayArr = testArr.length > 4 ? [testArr[0], testArr[1], testArr[2], testArr[3], testArr[4]] : [...testArr];
  // what is best practice here? to useState for the display array?

  const handleForward = () => {
    setStart(start + 1);
    setEnd(end + 1);
    setDisplayArr(testArr.slice(start + 1, start + 6));
    if (selected) {
      setSelected(selected + 1);
    }
  };
  const handleBack = () => {
    setStart(start - 1);
    setEnd(end - 1);
    setDisplayArr(testArr.slice(start - 1, end - 1));
    if (selected) {
      setSelected(selected - 1);
    }
  };

  // edge behavior:

  return (
    <>
      <div className="slider-container">
        {testArr.length > 4 && (
          <>
            {start > 0 && <button onClick={handleBack}>Back</button>}
            {start == 0 && <button disabled>Back</button>}
          </>
        )}
        {displayArr.map((test) => {
          return (
            <Image
              key={test.key}
              unit={test}
              array={testArr}
              selected={selected}
              setSelected={setSelected}
            />
          );
        })}
        {testArr.length > 4 && (
          <>
            {end < testArr.length && (
              <button onClick={handleForward}>Forward</button>
            )}
            {end == testArr.length && <button disabled>Forward</button>}
          </>
        )}
      </div>
    </>
  );
};

export default Slider;
