import { useEffect, useState } from "react";

const LoadMore = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)

  const fetchProducts = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count * 20}`)
      const data = await response.json()

      if (data && data.products && data.products.length) {
        setProducts((prevData) => [...prevData, ...data.products])
        setCount(count + 1)
        setIsLoading(false)
      }
      console.log(count)

    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const handleLoadMore = () => {
    fetchProducts()
  }

  useEffect(() => {
    fetchProducts()
  }, [])


  if (isLoading) {
    return <div>Content Loading!</div>
  }
  return ( 
    <div>
      <div className="grid grid-cols-5">
        {
          products && products.length 
          ? products.map((product, index) => {
            return (
              <div key={index}>
                <img src={product.thumbnail} alt="" className="h-64 w-64"/>
                <h4>{product.title}</h4>
              </div>
            )
          })
          : null
        }
      </div>
      <button className='mt-20 border-red-400 border-4' disabled={count < 5 ? false : true} onClick={handleLoadMore}>Load More</button>
    </div>
   );
}
 
export default LoadMore;