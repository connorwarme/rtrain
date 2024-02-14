import { useState } from "react";
import ModalContent from "./modal";

const Modal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleToggle = () => setShowModal(!showModal)

  return ( 
    <div>
      <button className="p-4 m-4 border bg-slate-200 rounded-md" onClick={handleToggle}>{ showModal ? 'Close Modal' : 'Open Modal' }</button>
      <div>
        {
          showModal && <ModalContent setModal={setShowModal} />
        }
      </div>
    </div>
   );
}
 
export default Modal;