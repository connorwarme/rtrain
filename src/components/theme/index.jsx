import useLS from "./useLS";

const LightDark = () => {
  const [theme, setTheme] = useLS("theme", 'dark')

  const handleChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return ( 
    <div className={theme === 'dark' ? 'bg-black text-gray-50' : 'bg-slate-300 text-black'}>
      <div className="p-42 m-10">
        <h1 className="font-bold h-10">Hello World</h1>
        <button className="mt-5 border p-4 rounded-sm" onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
   );
}
 
export default LightDark;