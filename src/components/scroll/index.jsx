import { useEffect, useState } from "react";

const ScrollIndicator = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [errorMsg, setErrorMsg] = useState('')

  const fetchData = async (url) => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      if (data && data.products && data.products.length > 0) {
        setData(data.products)
      } else {
        setErrorMsg('There was an error retrieving content from the server. Please refresh and try again.')
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setErrorMsg(error.msg)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  if (isLoading) {
    return <h4 className="text-lg m-2 p-4">Content is loading, please wait...</h4>
  }
  if (errorMsg) {
    return <h4 className="text-lg m-2 p-4">Error! {errorMsg}</h4>
  }
  return ( 
    <div>
      {
        data && data.length > 0
        ? (
          <div>
            <h1 className="font-bold text-4xl text-center m-2 p-4">Products:</h1>
            {
              data.map((item) => {
                return <p key={item.id} className="text-center mt-2 mb-2 p-2">{item.title}</p>
              })
            }
          </div>
        )
        : null
      }
    </div>
   );
}
 
export default ScrollIndicator;