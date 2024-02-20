import { useEffect, useState } from 'react'

const Autocomplete = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState('')
  const [list, setList] = useState([])
  const [errorMsg, setErrorMsg] = useState(null)
  const [showDropdown, setShowDropdown] = useState(false)
  const [filteredUsers, setFilteredUsers] = useState([])

  const fetchUserList = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://dummyjson.com/users?limit=100`)
      const data = await response.json()
      if (data && data.users && data.users.length > 0) {
        setList(data.users.map((user) => user.firstName))
        setIsLoading(false)
        setErrorMsg(null)
      }
    } catch (error) {
      console.log(error)
      setErrorMsg(error.msg)
      setIsLoading(false)
    }
  }

  const handleInput = (event) => {
    const query = event.target.value.toLowerCase()
    setInput(query)
    if (query.length > 1) {
      const filtered =
        list && list.length > 0
          ? list.filter((user) => user.toLowerCase().indexOf(query) > -1)
          : null
      console.log(filtered)
      setFilteredUsers(filtered)
      setShowDropdown(true)
    } else {
      setShowDropdown(false)
    }
  }

  useEffect(() => {
    fetchUserList()
  }, [])

  return (
    <div>
      <input
        type="text"
        onChange={(e) => handleInput(e)}
        placeholder=""
        value={input}
        className="m-4 rounded-lg border bg-slate-100 p-4"
      />
      <div>
        {showDropdown && filteredUsers && filteredUsers.length > 0 ? (
          <div className="bg-slate-200">
            <ul>
              {filteredUsers && filteredUsers.length > 0
                ? filteredUsers.map((user) => <li key={user}>{user}</li>)
                : null}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default Autocomplete
