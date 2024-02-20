import { useRef, useState } from 'react'
import useOutsideClick from '.'

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false)
  const ref = useRef()

  useOutsideClick(ref, () => setShowContent(false))

  const handleButtonClick = () => {
    setShowContent(true)
  }

  return (
    <>
      {showContent ? (
        <div ref={ref}>
          <p className="m-10 p-10">This is showing the content!</p>
        </div>
      ) : (
        <button
          className="m-4 rounded-sm border-2 p-4"
          onClick={handleButtonClick}
        >
          Show Content
        </button>
      )}
    </>
  )
}

export default UseOutsideClickTest
