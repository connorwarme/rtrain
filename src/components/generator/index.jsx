import { useState } from 'react'
import QRCode from 'react-qr-code'

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
        <input
          type="text"
          id="data-input"
          onInput={handleInput}
          value={value}
        />
        <button
          onClick={handleGenerate}
          disabled={value && value.trim() !== '' ? false : true}
          className="m-3 rounded-md border p-3"
        >
          Generate QR Code
        </button>
      </div>
      <div className="h row-span-5 m-4 flex items-center justify-center border-2 bg-slate-600 p-4">
        {qr ? <QRCode value={qr} className="" /> : null}
      </div>
    </div>
  )
}

export default QRGenerator
