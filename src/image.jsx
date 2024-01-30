import "./index.css"

const Image = ({ unit, array, selected, setSelected }) => {

  const handleClick = () => {
    // need to figure out how to find index position of current unit, or I could pass it as props
    // let index = array.indexOf(item => item.text === unit.text)
    console.log(unit)
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
        <img src={unit.img.toString()} alt="Client Testimony" onClick={handleClick} className={ checkSelected() ? 'active' : null} />
      </div>
    </>
   );
}
 
export default Image;