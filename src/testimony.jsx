import { useState } from "react";
import Slider from "./image-slider";

const Testimony = () => {
  const [selected, setSelected] = useState(false)

  const array = [
    { img: false, text: 'testimony number 1'}, 
    { img: false, text: 'testimony number 2'}, 
    { img: false, text: 'testimony number 3'}, 
    { img: false, text: 'testimony number 4'}, 
    { img: false, text: 'testimony number 5'}, 
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