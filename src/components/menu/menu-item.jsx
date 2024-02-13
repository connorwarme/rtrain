import { useState } from 'react'
import MenuList from './menu-list'

const MenuItem = ({ list }) => {
  const [displayCurrent, setDisplayCurrent] = useState({})

  const handleToggle = (label) => {
    console.log(label)
    setDisplayCurrent({
      ...displayCurrent,
      [label]: !displayCurrent[label]
    })
  }
  console.log(displayCurrent)
  return (
    <li>
      <div>
        <p>{list.label}</p>
        {list && list.children && list.children.length > 0 ? (
          <span onClick={() => handleToggle(list.label)}>
            {displayCurrent[list.label] ? '-' : '+'}
          </span>
        ) : null}
      </div>
      {list &&
      list.children &&
      list.children.length > 0 &&
      displayCurrent[list.label] ? (
        <MenuList list={list.children} classy={'ml-10'} />
      ) : null}
    </li>
  )
}

export default MenuItem
