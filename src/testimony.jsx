import { useState } from "react";
import logo from "../src/assets/react.svg"
import Slider from "./image-slider";

const Testimony = () => {
  const [selected, setSelected] = useState(null)

  const array = [
    { img: logo, text: 'testimony number 1', index: 0}, 
    { img: logo, text: 'testimony number 2', index: 1}, 
    { img: logo, text: 'testimony number 3', index: 2}, 
    { img: logo, text: 'testimony number 4', index: 3}, 
    { img: logo, text: 'testimony number 5', index: 4}, 
    { img: logo, text: 'testimony number 11', index: 5}, 
    { img: logo, text: 'testimony number 22', index: 6}, 
    { img: logo, text: 'testimony number 33', index: 7}, 
    { img: logo, text: 'testimony number 44', index: 8}, 
    { img: logo, text: 'testimony number 55', index: 9}, 
  ]

  return ( 
    <>
      <div className="testimony-container">
        <Slider testArr={array} selected={selected} setSelected={setSelected} />
        <div className="testimony-text">
          { selected > -1 && selected != null && (
            <>
            { console.log(selected)}
              <p>{array[selected].text}</p>
            </>
          )}
        </div>
      </div>
    </>
   );
}
 
export default Testimony;