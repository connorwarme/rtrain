import { useState, useEffect } from "react";
import reactIcon from "../../assets/react.svg"

const ImageSlider = ({ url, page = '1', limit = '5'}) => {
  const [images, setImages] = useState([])
  const [current, setCurrent] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchImages = async (url) => {
    try {
      setIsLoading(true)
      const response = await fetch(`${url}?page=${page}&limit=${limit}`)
      const data = await response.json()
      setImages(data)
      setIsLoading(false)
      setError(null)
    } catch (error) {
      setError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchImages(url)
  }, [url])

  const handleBack = () => {
    current === 0 ? setCurrent(images.length - 1) : setCurrent(current - 1)
    console.log(current)
  }

  const handleNext = () => {
    current !== images.length - 1 ? setCurrent(current + 1) : setCurrent(0)
    console.log(current)
  }

  

  return ( 
    <>
    { error && (
      <div>
        <p>Error! {error}</p>
      </div>
    )}
    { isLoading && (
      <div>
        <p>Content is loading! Please wait.</p>
      </div>
    )}
    { !error && !isLoading && (
      <div className="container relative">
        <img src={reactIcon} alt="" className="absolute top-5 left-1 hover:cursor-pointer" onClick={handleBack}/>
        <img src={reactIcon} alt="" className="absolute top-5 right-1 hover:cursor-pointer" onClick={handleNext}/>
      </div>
    )}
    </>
   );
}
 
export default ImageSlider;