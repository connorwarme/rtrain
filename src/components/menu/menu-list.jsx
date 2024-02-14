import MenuItem from './menu-item'

const MenuList = ({ list, classy }) => {
  return (
    <ul className={`list-disc ${classy}`}>
      {list && list.length
        ? list.map((item) => {
            console.log(item)
            return <MenuItem list={item} key={item.label} />
          })
        : null}
    </ul>
  )
}

export default MenuList
