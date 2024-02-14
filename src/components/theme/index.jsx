import { useState } from "react";

const LightDark = () => {
  const [theme, setTheme] = useState(false)

  const handleChangeTheme = () => {
    setTheme(!theme)
  }

  return ( 
    <div className={theme ? 'bg-black text-gray-50' : 'bg-slate-300 text-black'}>
      <div className="p-42 m-10">
        <h1 className="font-bold h-10">Hello World</h1>
        <button className="mt-5 border p-4 rounded-sm" onClick={handleChangeTheme}>Change Theme</button>
      </div>
    </div>
   );
}
 
export default LightDark;