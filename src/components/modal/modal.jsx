const ModalContent = ({ id, header, body, footer, setModal }) => {
  const handleClose = () => setModal(false)
  return (
    <div
      id={id || 'modal'}
      className="absolute left-0 top-0 z-10 min-h-full min-w-full bg-black"
    >
      <div className="bg-slate-200">
        <span onClick={handleClose}>&times;</span>
        {header ? header : <h1>Header Content</h1>}
      </div>
      <div className="bg-slate-200">{body ? body : <h1>Body Content</h1>}</div>
      <div className="bg-slate-200">
        {footer ? footer : <h1>Footer Content</h1>}
      </div>
    </div>
  )
}

export default ModalContent
