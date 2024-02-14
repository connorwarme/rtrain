import useLS from './useLS'

const LightDark = () => {
  const [theme, setTheme] = useLS('theme', 'dark')

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div
      className={
        theme === 'dark' ? 'bg-black text-gray-50' : 'bg-slate-300 text-black'
      }
    >
      <div className="p-42 m-10">
        <h1 className="h-10 font-bold">Hello World</h1>
        <button
          className="mt-5 rounded-sm border p-4"
          onClick={handleChangeTheme}
        >
          Change Theme
        </button>
      </div>
    </div>
  )
}

export default LightDark
