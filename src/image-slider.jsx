import Image from "./image";

const Slider = ({ testArr, selected, setSelected }) => {
  return ( 
    <>
      { testArr.map(test => {
        return <Image key={test.key} unit={test} selected={selected} setSelected={setSelected} />
      })}
    </>
   );
}
 
export default Slider;