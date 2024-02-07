import './index.css'

const Image = ({ unit, array, selected, setSelected }) => {
  const handleClick = () => {
    setSelected(unit.index)
  }

  const checkSelected = () => {
    if (selected && selected > -1) {
      if (array[selected].text === unit.text) {
        return true
      }
    }
    return false
  }
  return (
    <>
      <div className="image-container">
        <img
          src={unit.img.toString()}
          alt="Client Testimony"
          onClick={handleClick}
          className={checkSelected() ? 'active' : null}
        />
      </div>
    </>
  )
}

export default Image
