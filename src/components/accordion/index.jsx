import { useState } from 'react'
import info from './data'

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [enableMulti, setEnableMulti] = useState(false)
  const [selectMulti, setSelectMulti] = useState([])

  const handleSingleSelect = (id) => {
    setSelected(selected === id ? null : id)
  }
  const handleMultiSelect = (id) => {
    let copy = [...selectMulti]
    const index = copy.indexOf(id)
    if (index === -1) copy.push(id)
    else copy.splice(index, 1)

    setSelectMulti(copy)
  }

  const handleEnableMulti = () => {
    if (enableMulti) {
      setSelectMulti([])
      setEnableMulti(false)
    } else {
      setEnableMulti(!enableMulti)
      setSelected(null)
    }
  }

  const data = info;
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <button onClick={handleEnableMulti}>
        Enable Multiple Selection
      </button>
      {data.map((item) => {
        {
          console.log(item)
        }
        return (
          <div key={item.id} className="">
            <div
              className="title flex justify-between"
              onClick={
                enableMulti
                  ? () => handleMultiSelect(item.id)
                  : () => handleSingleSelect(item.id)
              }
            >
              <h3 className="mr-10">{item.question}</h3>
              <span>{(selected === item.id || (enableMulti && selectMulti.indexOf(item.id) !== -1)) ? '-' : '+'}</span>
            </div>
            <div>
              {(selected === item.id ||
                (enableMulti && selectMulti.indexOf(item.id) !== -1)) && (
                <>
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
