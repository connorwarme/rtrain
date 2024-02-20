import { useState } from 'react'
import ModalContent from './modal'

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleToggle = () => setShowModal(!showModal)

  return (
    <div>
      <button
        className="m-4 rounded-md border bg-slate-200 p-4"
        onClick={handleToggle}
      >
        {showModal ? 'Close Modal' : 'Open Modal'}
      </button>
      <div>{showModal && <ModalContent setModal={setShowModal} />}</div>
    </div>
  )
}

export default Modal
