import MenuList from './menu-list'
import menus from './data'

const MenuUI = () => {
  const list = menus
  return (
    <>
      <MenuList list={list} classy={null} />
    </>
  )
}

export default MenuUI
