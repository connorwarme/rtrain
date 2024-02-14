import { useEffect, useState } from "react";

const useLS = ( key, defaultValue ) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    console.log(key)
    try {
      currentValue = JSON.parse(localStorage.getItem(key)) || String(defaultValue);
    } catch (error) {
      console.log(error)
      currentValue = defaultValue
    }

    return currentValue;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
 
export default useLS;