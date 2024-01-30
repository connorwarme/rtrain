import { useState } from "react";
import logo from "../src/assets/react.svg"
import Slider from "./image-slider";

const Testimony = () => {
  const [selected, setSelected] = useState(false)

  const array = [
    { img: logo, text: 'testimony number 1'}, 
    { img: logo, text: 'testimony number 2'}, 
    { img: logo, text: 'testimony number 3'}, 
    { img: logo, text: 'testimony number 4'}, 
    { img: logo, text: 'testimony number 5'}, 
    { img: logo, text: 'testimony number 11'}, 
    { img: logo, text: 'testimony number 22'}, 
    { img: logo, text: 'testimony number 33'}, 
    { img: logo, text: 'testimony number 44'}, 
    { img: logo, text: 'testimony number 55'}, 
  ]

  return ( 
    <>
      <div className="testimony-container">
        <Slider testArr={array} selected={selected} setSelected={setSelected} />
        <div className="testimony-text">
          { selected && (
            <>
              <p>{selected.text}</p>
            </>
          )}
        </div>
      </div>
    </>
   );
}
 
export default Testimony;