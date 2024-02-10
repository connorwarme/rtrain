import { useState } from "react";
import info from "./data"

const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const handleSingleSelect = (id) => {
    setSelected(selected === id ? null : id)
  }

  const data = info;
  console.log(data)
  return ( 
    <div className="grid grid-rows-4 justify-center">
    {
      data.map(item => {
        { console.log(item) }
        return (
            <div key={item.id} className="">
              <div className="title flex justify-between" onClick={() => handleSingleSelect(item.id)}>
                <h3 className="mr-10">{item.question}</h3>
                <span>{selected === item.id ? '-' : '+'}</span>
              </div>
              <div>
                { selected === item.id && (
                  <>
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
        )
      })
    }
      {/* { data && data.length > 0 ? (
          data.map(item => {
          <>
            <div key={item.id}>
              <div className="title" onClick={() => handleSingleSelect(item.id)}>
                <h3>{item.question}</h3>
                <span>{selected === item.id ? '-' : '+'}</span>
              </div>
              <div>
                { selected === item.id && (
                  <>
                    <div>
                      <p>{item.answer}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </>
      })) : (
        <div>No data found!</div>
      )
      } */}
    </div>
   );
}
 
export default Accordion;