import { useState } from 'react'

const DynamicTabs = () => {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChangeTab = (id) => {
    setCurrentTab(Number(id))

    console.log(id)
  }

  return (
    <div>
      <div>
        <button
          id="1"
          className="m-4 rounded-md border p-4"
          onClick={(e) => handleChangeTab(e.target.id)}
        >
          Tab 1
        </button>
        <button
          id="2"
          className="m-4 rounded-md border p-4"
          onClick={(e) => handleChangeTab(e.target.id)}
        >
          Tab 2
        </button>
        <button
          id="3"
          className="m-4 rounded-md border p-4"
          onClick={(e) => handleChangeTab(e.target.id)}
        >
          Tab 3
        </button>
      </div>
      <div>
        {currentTab === 1 && (
          <div>
            <h1 className="text-6xl">Tab One Content</h1>
          </div>
        )}
        {currentTab === 2 && (
          <div>
            <h1 className="text-6xl">Tab Two Content</h1>
          </div>
        )}
        {currentTab === 3 && (
          <div>
            <h1 className="text-6xl">Tab Three Content</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default DynamicTabs
