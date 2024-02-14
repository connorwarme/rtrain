import { useEffect, useState } from 'react'

const ScrollIndicator = ({ url }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [errorMsg, setErrorMsg] = useState('')
  const [scrollPercent, setScrollPercent] = useState(0)

  const fetchData = async (url) => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      if (data && data.products && data.products.length > 0) {
        setData(data.products)
      } else {
        setErrorMsg(
          'There was an error retrieving content from the server. Please refresh and try again.'
        )
      }
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setErrorMsg(error.msg)
      setIsLoading(false)
    }
  }
  const handleScroll = () => {
    // console.log(document.body.scrollTop, document.documentElement.scrollTop, document.documentElement.scrollHeight, document.documentElement.clientHeight)

    const scrollAmount =
      document.body.scrollTop || document.documentElement.scrollTop
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
    const scrollPercent = Math.round((scrollAmount / height) * 100)

    setScrollPercent(scrollPercent)
  }

  useEffect(() => {
    fetchData(url)
  }, [url])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  if (isLoading) {
    return (
      <h4 className="m-2 p-4 text-lg">Content is loading, please wait...</h4>
    )
  }
  if (errorMsg) {
    return <h4 className="m-2 p-4 text-lg">Error! {errorMsg}</h4>
  }
  return (
    <div>
      <div className="sticky top-0 flex h-20 w-screen flex-col justify-end bg-slate-200">
        <div
          style={{ width: `${scrollPercent}%` }}
          className="h-3 bg-red-600"
        ></div>
      </div>
      {data && data.length > 0 ? (
        <div>
          <h1 className="m-2 p-4 text-center text-4xl font-bold">Products:</h1>
          {data.map((item) => {
            return (
              <p key={item.id} className="mb-2 mt-2 p-2 text-center">
                {item.title}
              </p>
            )
          })}
        </div>
      ) : null}
    </div>
  )
}

export default ScrollIndicator
