import { useState } from "react";

export default function Form () {
  const [person, setPerson] = useState({
    name: 'Amity',
    about: 'Energizer',
    interests: 'nutrition',
    options: [],
  })
  const [checkedState, setCheckedState] = useState(new Array(9).fill(false))
  const [printedList, setPrintedList] = useState([])

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    })
  }

  const toppings = ['pepperoni', 'sausage', 'onion', 'mushroom', 'roasted garlic', 'rosemary', 'oregano', 'vegan sausage', 'mozzarella']
  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState)
  }

  
  const updateList = () => {
    const listCopy = []
    checkedState.map((checked, index) => {
      if (checked) {
        listCopy.push(toppings[index])
      } else {
        console.log('unchecked')
      }
    })
    setPrintedList(listCopy)
  }

  return ( 
    <>
      <form>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={person.name} onChange={handleChange} />
        </div>
        <div>
          <label>About</label>
          <textarea name="about" value={person.about} onChange={handleChange} />
        </div>
        <div>
          <label>Interested In</label>
          <select name="interests" value={person.interests} onChange={handleChange} >
            <option value="nutrition">Nutrition</option>
            <option value="longevity">Longevity</option>
            <option value="genetics">Genetics</option>
            <option value="labs">Labs</option>
          </select>
        </div>
        {/* <div>
          <fieldset>
            <legend>Options</legend>
            <div>
              <label>Morning Appointment</label>
              <input type="checkbox" id="morning" name="appt" />
            </div>
            <div>
              <label>Afternoon Appointment</label>
              <input type="checkbox" id="afternoon" name="appt" />
            </div>
            <div>
              <label>Evening Appointment</label>
              <input type="checkbox" id="evening" name="appt" />
            </div>
          </fieldset>
        </div> */}
        <div>
          <fieldset>
            <legend>Toppings</legend>
            { toppings.map((topping, index) => {
              return (
                <div key={index}>
                  <label>{topping}</label>
                  <input 
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={topping}
                    value={topping}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                </div>
              )
            })}
          </fieldset>
        </div>
      </form>
      <div>
        <h1>{person.name}</h1>
        <p>{person.about}</p>
        <p>{person.interests}</p>
        <ul>
        {checkedState.map((option, index) => <li key={index}>{option ? 'true' : 'false'}</li>)}
        </ul>
        <button onClick={updateList}>Get List</button>
        {printedList.map(item => <p key={item}>{item}</p>)}
      </div>
    </>
   );
}