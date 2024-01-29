import "./index.css"

const Image = ({ unit, selected, setSelected }) => {

  const handleClick = () => {
    setSelected(unit)
  }

  const checkSelected = () => {
    if (selected) {
      if (selected.text === unit.text) {
        return true
      }
    }
    return false
  }
  return ( 
    <>
      <div className="image-container">
        <img src={unit.img.toString()} alt="Client Testimony" onClick={handleClick} className={ checkSelected() ? 'active' : ''} />
      </div>
    </>
   );
}
 
export default Image;