import { useState } from "react";
import QRCode from "react-qr-code";

const QRGenerator = () => {
  const [value, setValue] = useState('')
  const [qr, setQR] = useState('')

  const handleInput = (event) => {
    setValue(event.target.value)
  }
  // not sure what the problem is at the moment...

  const handleGenerate = () => {
    setQR(value)
    setValue('')
  }

  return ( 
    <div className="grid grid-rows-6">
      <div>
        <label htmlFor="data-input">Enter Data:</label>
        <input type="text" id="data-input" onInput={handleInput} value={value} />
        <button onClick={handleGenerate} disabled={value && value.trim() !== '' ? false : true } className="border rounded-md p-3 m-3">Generate QR Code</button>
      </div> 
      <div className="border-2 p-4 m-4 bg-slate-600 h row-span-5 flex justify-center items-center">
        { qr
          ? <QRCode value={qr} className=""/>
          : null
        }
      </div>
    </div>
   );
}
 
export default QRGenerator;