import { useRef } from 'react'
import useFetch from '../useFetch'

const ScrollNinja = () => {
  const { data, isLoading, error } = useFetch(
    'https://dummyjson.com/products?limit=100',
    {}
  )

  const ref = useRef(null)
  const sectionRef = useRef(null)

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }
  const handleScrollToBottom = () => {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleScrollToSection = () => {
    let pos = sectionRef.current.getBoundingClientRect()

    window.scrollTo({
      top: pos.top,
      behavior: 'smooth',
    })
  }

  if (isLoading) {
    return <h1>Content is loading, please wait...</h1>
  }
  if (error) {
    return <h1>There was an error, please try again.</h1>
  }
  return (
    <div>
      <h1>Scroll Ninja</h1>
      <p>This is the top of the page.</p>
      <button onClick={handleScrollToBottom} className="m-4 border-2 p-4">
        Scroll to Bottom
      </button>
      <button onClick={handleScrollToSection} className="m-4 border-2 p-4">
        Scroll to Section
      </button>
      <h1 className="mt-10">Section One</h1>
      <ul className="list-none">
        {data && data.products && data.products.length > 0
          ? data.products.map((item, index) => (
              <li key={index}>{item.title}</li>
            ))
          : null}
      </ul>
      <h1 className="mt-10" ref={sectionRef}>
        Section Two
      </h1>
      <ul className="list-none">
        {data && data.products && data.products.length > 0
          ? data.products.map((item, index) => (
              <li key={index * 10}>{item.title}</li>
            ))
          : null}
      </ul>
      <h1 className="mt-10">Section Two</h1>
      <ul className="list-none">
        {data && data.products && data.products.length > 0
          ? data.products.map((item, index) => (
              <li key={index * 100}>{item.title}</li>
            ))
          : null}
      </ul>
      <p ref={ref}>This is the bottom of the page.</p>
      <button onClick={handleScrollToTop} className="m-4 border-2 p-4">
        Scroll to Top
      </button>
    </div>
  )
}

export default ScrollNinja
