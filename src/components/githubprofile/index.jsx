import { useEffect, useState } from 'react'

const GitHubProfile = () => {
  const [searchValue, setSearchValue] = useState('connorwarme')
  const [profile, setProfile] = useState({})

  const handleInput = (event) => {
    setSearchValue(event.target.value)
  }

  const handleFind = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${searchValue}`
      )
      const profile = await response.json()
      console.log(profile)
      if (profile && profile.login) {
        setProfile(profile)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleFind()
  }, [])

  return (
    <div>
      <div>
        <input
          type="text"
          onInput={(e) => handleInput(e)}
          value={searchValue}
          className="m-4 rounded-md border bg-slate-100 p-4"
          placeholder="Enter Github Username"
        />
        <button
          onClick={handleFind}
          className="m-4 rounded-md border bg-slate-100 p-4"
        >
          Find Profile
        </button>
      </div>
      <div>
        {profile && profile.login && (
          <div className="card">
            <h4>{profile.name}</h4>
            <a href={profile.html_url}>{profile.html_url}</a>
            <img
              src={profile.avatar_url}
              alt="User avatar"
              className="h-48 w-48 rounded-xl"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default GitHubProfile
