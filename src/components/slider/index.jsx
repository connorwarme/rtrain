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
      console.log(data)
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
      <div className="container relative h-96 w-96 bg-slate-300 flex justify-center items-center">
        <img src={reactIcon} alt="" className="absolute w-5 h-5 left-1 hover:cursor-pointer" onClick={handleBack}/>
        { images && images.length
          ? images.map((image, index) => {
              return (
                <img 
                  key={image.id}
                  src={image.download_url}
                  className={current === index ? 'block' : 'hidden'}
                />
              )
            })
          : null
        }
        <img src={reactIcon} alt="" className="absolute w-5 h-5 right-1 hover:cursor-pointer" onClick={handleNext}/>
        <span className="flex justify-center absolute bottom-1" >
          { images && images.length
            ? images.map((item, index) => {
              let style = ''
              if (current === index) {
                style = 'hover:bg-white w-5 h-5 m-2 border-none rounded-full bg-red-500'
              } else {
                style = 'hover:bg-white w-5 h-5 m-2 border-none rounded-full bg-blue-800'
              }
              return (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={style}
                ></button>
              )
            })
            : null
          }
        </span>
      </div>
    )}
    </>
   );
}
 
export default ImageSlider;